import React, { useState, useEffect, useCallback, useMemo } from "react";
import Plot from "react-plotly.js";
import CardData from "./design/CardData";
import BatteryInfo from "./BatteryInfo";
import debounce from "lodash.debounce";
import styled from 'styled-components';

const RealTime = () => {
  const [sensorDataUltrasonic, setSensorDataUltrasonic] = useState([]);
  const [sensorDataSubmersible, setSensorDataSubmersible] = useState([]);
  const [sensorDataSuhu, setSensorDataSuhu] = useState([]);
  const [dataBattery, setDataBattery] = useState([]);
  const [error, setError] = useState(null);
  const initialBatteryInfo = { level: null, charging: null, supported: false };
  const [batteryInfo, setBatteryInfo] = useState(initialBatteryInfo);
  const [timeRange, setTimeRange] = useState("hariini");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const formatDate = (date) => {

    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const fetchData = async (url, setData, dataKey, setError) => {
    try {
      console.log(`Mengambil data dari: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Kesalahan HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Data respons lengkap untuk ${dataKey}:`, data);

      let extractedData = data[dataKey];
      console.log(`Data yang diambil untuk ${dataKey} adalah `, extractedData);

      if (extractedData && typeof extractedData === 'object' && !Array.isArray(extractedData)) {
        console.warn(`Data untuk ${dataKey} adalah objek, mengubahnya menjadi array.`);
        extractedData = [extractedData];
      }

      if (!Array.isArray(extractedData)) {
        console.warn(`Diharapkan sebuah array tapi mendapatkan ${typeof extractedData} untuk ${dataKey}`);
        extractedData = [];
      }

      if (extractedData.length === 0) {
        console.warn(`Tidak ada data ditemukan untuk ${dataKey}, menggunakan array kosong sebagai fallback.`);
      }

      setData(extractedData);
      console.log(`Data yang diambil untuk ${dataKey}:`, extractedData);
      setError(null);
    } catch (error) {
      console.error(`Kesalahan saat mengambil ${dataKey}:`, error);
      setError(`Kesalahan saat mengambil ${dataKey}: ${error.message}`);
    }
  };

  const fetchAllData = useCallback(() => {
    setLoading(true);
    Promise.all([
      fetchData("https://sealling.iot4environment.com/admin/data_ultrasonic.php", setSensorDataUltrasonic, "sensor_ultrasonic", setError),
      fetchData("https://sealling.iot4environment.com/admin/data_submersible.php", setSensorDataSubmersible, "sensor_submersible", setError),
      fetchData("https://sealling.iot4environment.com/admin/data_suhu.php", setSensorDataSuhu, "sensor_suhu", setError),
      fetchData("https://sealling.iot4environment.com/admin/data_baterai.php", setDataBattery, "sisa_baterai", setError)
    ]).finally(() => setLoading(false));
  }, [setError, setSensorDataUltrasonic, setSensorDataSubmersible, setSensorDataSuhu, setDataBattery]);

  useEffect(() => {
    const debouncedFetchAllData = debounce(fetchAllData, 300);
    debouncedFetchAllData();
    const interval = setInterval(debouncedFetchAllData, 60000); // 1 menit
    return () => {
      clearInterval(interval);
      if (debouncedFetchAllData.cancel) {
        debouncedFetchAllData.cancel();
      }
    };
  }, [fetchAllData]);


  const updateBatteryInfo = useCallback((battery) => {
    console.log("Isi dataBattery:", dataBattery);

    const batteryLevelFromAPI = dataBattery.length > 0 ? dataBattery[dataBattery.length - 1].persen : null;
    console.log("Battery level from API (if available):", batteryLevelFromAPI);


    const level = batteryLevelFromAPI !== null
        ? parseFloat(batteryLevelFromAPI).toFixed(2) 
        : parseFloat(battery.level).toFixed(2);         

  
    if (batteryLevelFromAPI !== null) {
        console.log("Battery level from API:", level);
    } else {
        console.log("Battery level from navigator:", level);
    }

    const parsedLevel = parseFloat(level);
    if (parsedLevel < 0) {
        console.error("Error: Battery level cannot be negative.");
        return;
    } else if (parsedLevel > 100) {
        console.error("Error: Battery level cannot be greater than 100.");
        return;
    }
   
    setBatteryInfo({
        level: parsedLevel,  
        charging: battery.charging,
        supported: true,
    });
}, [dataBattery]);

const checkBatteryAPIAndSetup = useCallback(async () => {
  if (navigator.getBattery) {
    try {
      const battery = await navigator.getBattery();
      updateBatteryInfo(battery);
      battery.addEventListener("chargingchange", () => updateBatteryInfo(battery));
      battery.addEventListener("levelchange", () => updateBatteryInfo(battery));
    } catch (error) {
      console.error("Battery status is not supported.");
      setBatteryInfo((prev) => ({ ...prev, supported: false }));
    }
  } else {
    console.error("Battery status is not supported.");
    setBatteryInfo((prev) => ({ ...prev, supported: false }));
  }
}, [updateBatteryInfo]);

useEffect(() => {
  checkBatteryAPIAndSetup();
  const intervalId = setInterval(checkBatteryAPIAndSetup, 60000); // 1 menit
  return () => {
    clearInterval(intervalId);
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        battery.removeEventListener("chargingchange", () => updateBatteryInfo(battery));
        battery.removeEventListener("levelchange", () => updateBatteryInfo(battery));
      });
    }
  };
}, [checkBatteryAPIAndSetup, updateBatteryInfo]);


const filterData = (data, range, month) => {
  if (!data || data.length === 0) return [];
  const now = new Date();
  let startRange, endRange;
  console.log("Filtering data for range:", range, "and month:", month);

  switch (range) {
    case 'hariini':
      startRange = new Date(now);
      startRange.setHours(0, 0, 0, 0);
      endRange = new Date(now);
      endRange.setHours(23, 59, 59, 999);
      break;
    case 'mingguini':
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - (now.getDay() === 0 ? 6 : now.getDay() - 1)); // Set to Monday
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      
      startRange = startOfWeek;
      endRange = endOfWeek;
      break;
    case 'bulanini':
      startRange = new Date(now.getFullYear(), now.getMonth(), 1);
      endRange = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      endRange.setHours(23, 59, 59, 999);
      break;
    case 'bulan':
      startRange = new Date(now.getFullYear(), month, 1);
      endRange = new Date(now.getFullYear(), month + 1, 0);
      endRange.setHours(23, 59, 59, 999);
      break;
    default:
      console.warn(`Range "${range}" is not valid.`);
      return [];
  }

  console.log("Start Range:", startRange);
  console.log("End Range:", endRange);

  return data.filter(item => {
    const timestamp = item.date;

    if (!timestamp) {
      console.warn(`Missing or empty timestamp: ${timestamp}`);
      return false;
    }

    const date = new Date(timestamp);
    const isValidDate = !isNaN(date.getTime()); 
    
    console.log("Item Date:", isValidDate ? date : "Invalid Date", "Is in range:", isValidDate && date >= startRange && date <= endRange);
    return isValidDate && date >= startRange && date <= endRange;
  });
}; 
  
const getDataFields = useCallback((data, field) => {
  if (!Array.isArray(data)) return [];
  return data.map(item => item[field] !== undefined ? item[field] : null);
}, []);

const handleTimeRangeChange = useCallback((event) => {
  const newValue = event.target.value;
  setTimeRange(newValue);
  console.log("Time range changed to:", newValue);
  if (newValue !== 'bulan') {
    setSelectedMonth(new Date().getMonth());
  }
}, []);

const handleMonthChange = useCallback((event) => {
  const newMonth = parseInt(event.target.value, 10);
  setSelectedMonth(newMonth);
  console.log("Month changed to:", newMonth);
}, []);
  
 
  useEffect(() => {
    const logSensorDataArrays = () => {
      console.log('logSensorDataArrays dipanggil');
      console.log('Is sensorDataUltrasonic an array?', Array.isArray(sensorDataUltrasonic));
      console.log('SensorDataUltrasonic contents:', sensorDataUltrasonic);
  
      console.log('Is sensorDataSubmersible an array?', Array.isArray(sensorDataSubmersible));
      console.log('SensorDataSubmersible contents:', sensorDataSubmersible);
  
      console.log('Is sensorDataSuhu an array?', Array.isArray(sensorDataSuhu));
      console.log('SensorDataSuhu contents:', sensorDataSuhu);
  
      console.log('Is dataBattery an array?', Array.isArray(dataBattery));
      console.log('DataBattery contents:', dataBattery);
    };
  
    const interval = setInterval(() => {
      console.log('Interval callback invoked');
      logSensorDataArrays();
    }, 60000); // 1 minute
  
    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, [sensorDataUltrasonic, sensorDataSubmersible, sensorDataSuhu, dataBattery]);
  
  // Filtered data
  const filteredUltrasonicData = useMemo(() => {
    const data = filterData(sensorDataUltrasonic, timeRange, selectedMonth);
    console.log("Filtered Ultrasonic Data:", data);
    return data;
  }, [sensorDataUltrasonic, timeRange, selectedMonth]);
  
const filteredSubmersibleData = useMemo(() => {
    const data = filterData(sensorDataSubmersible, timeRange, selectedMonth);
    console.log("Filtered Submersible Data:", data);
    return data;
  }, [sensorDataSubmersible, timeRange, selectedMonth]);
  
const filteredSuhuData = useMemo(() => filterData(sensorDataSuhu, timeRange, selectedMonth), [sensorDataSuhu, timeRange, selectedMonth]);
  
const filterDataByTime = (ultrasonicData, submersibleData) => {
    let filteredData = [];

    const addData = (data, sensorType) => {
        data.forEach(item => {
            const date = new Date(item.date);
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const time = hour + minutes / 60; // Convert time to decimal for easier comparison

            if (sensorType === 'ultrasonic' && time >= 9.5 && time < 18) {
                filteredData.push({
                    date: item.date,
                    value: item.ket_ultrasonic,
                });
            } else if (sensorType === 'submersible' && (time >= 18 || time < 9.5)) {
                filteredData.push({
                    date: item.date,
                    value: item.kedalaman,
                });
            }
        });
    };

    // Handle the morning submersible data (00:00 - 09:30)
    const subDataMorning = submersibleData.filter(item => {
        const date = new Date(item.date);
        const time = date.getHours() + date.getMinutes() / 60;
        return time >= 0 && time < 9.5;
    });
    addData(subDataMorning, 'submersible');

    // Connect morning submersible data directly to ultrasonic data (09:30 - 18:00)
    addData(ultrasonicData, 'ultrasonic');

    // Add a null separator to prevent unwanted connections
    filteredData.push({ date: null, value: null });

    // Handle the evening submersible data (18:00 - 24:00)
    const subDataEvening = submersibleData.filter(item => {
        const date = new Date(item.date);
        const time = date.getHours() + date.getMinutes() / 60;
        return time >= 18;
    });
    addData(subDataEvening, 'submersible');

    return filteredData;
};

const combinedData = useMemo(() => {
  return filterDataByTime(filteredUltrasonicData, filteredSubmersibleData);
}, [filteredUltrasonicData, filteredSubmersibleData]);

  
const xDataCombined = useMemo(
    () => getDataFields(combinedData, 'date'),
    [combinedData, getDataFields]
);

const yDataCombined = useMemo(
    () => getDataFields(combinedData, 'value'),
    [combinedData, getDataFields]
);

  const waktuUltrasonic = useMemo(() => {
    const dates = getDataFields(filteredUltrasonicData, 'date');
    if (dates.length === 0) return null; 
  
    return dates[0];
  }, [filteredUltrasonicData, getDataFields]);
  
  console.log('waktuUltrasonic:', waktuUltrasonic);

  const statusUltrasonic = useMemo(() => {
    if (filteredUltrasonicData.length === 0) return null; 
  
    const lastItem = filteredUltrasonicData[0];
    return lastItem.status;
  }, [filteredUltrasonicData]);
  
  console.log('statusUltrasonic:', statusUltrasonic);

  const waktuSubmersible = useMemo(() => {
    const dates = getDataFields(filteredSubmersibleData, 'date');
    if (dates.length === 0) return null; 
  
   
    return dates[0];
  }, [filteredSubmersibleData, getDataFields]);
  
  console.log('waktuSubmersible:', waktuSubmersible);

  const statusSubmersible = useMemo(() => {
    if (filteredSubmersibleData.length === 0) return null;
  
    const lastItem = filteredSubmersibleData[0];
    return lastItem.status;
  }, [filteredSubmersibleData]);
  
  console.log('statusSubmersible:', statusSubmersible);
  
  const xDataSuhu = useMemo(
    () => getDataFields(filteredSuhuData, 'date'),
    [filteredSuhuData, getDataFields]
  );
  console.log('xDataSuhu:', xDataSuhu);
  
  const yDataSuhu = useMemo(
    () => getDataFields(filteredSuhuData, 'suhu'),
    [filteredSuhuData, getDataFields]
  );
  console.log('yDataSuhu:', yDataSuhu); 
  
  const StatusIcon = styled.span`
  color: ${props => {
    switch (props.status) {
      case 'Normal':
        return 'green'; 
      case 'Siaga':
        return '#FFD700'; 
      case 'Bahaya':
        return 'red'; 
      default:
        return 'black';
      }
    }};
    font-weight: bold;
    font-size: 7xl;
    margin-right: 1rem;
  `;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(sensorDataUltrasonic) || !Array.isArray(sensorDataSubmersible) || !Array.isArray(sensorDataSuhu) || !Array.isArray(dataBattery)) {
    return <div>Error: Sensor data is not an array</div>;
  }


  return (
    <div className="max-w-[1240px] w-full  h-full mx-auto flex flex-col  pt-8 pb-8">
      <header className="warning-page shadow-md max-w-[1240px] p-4 mb-6">
        <h1 className="text-xl md:text-4xl font-semibold text-white  mr-8">
          DASHBOARD MONITORING LEVEL AIR LAUT
        </h1>
      </header>

      <div className="bg-white  shadow-md rounded p-4">
        <h1 className="text-slate-900 font-bold text-2xl md:text-4xl mb-4 pt-4 pb-4 ">
          Universitas Telkom - Bandung
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <CardData title="Hari ini" total="20 cm" rate="0.43%" levelUp>
            <svg
              className="fill-primary dark:fill-white"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                fill=""
              />
              <path
                d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                fill=""
              />
            </svg>
          </CardData>
          <CardData title="7 Hari Terakhir" total="20 cm" rate="4.35%" levelUp>
            <svg
              className="fill-primary dark:fill-white"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.0937 16.4312 11.7531 16.4312ZM11.7531 19.8687C11.2375 19.8687 10.825 19.4562 10.825 18.9406C10.825 18.425 11.2375 18.0125 11.7531 18.0125C12.2687 18.0125 12.6812 18.425 12.6812 18.9406C12.6812 19.4219 12.2343 19.8687 11.7531 19.8687Z"
                fill=""
              />
              <path
                d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.56245 16.4312 5.22183 16.4312ZM5.22183 19.8687C4.7062 19.8687 4.2937 19.4562 4.2937 18.9406C4.2937 18.425 4.7062 18.0125 5.22183 18.0125C5.73745 18.0125 6.14995 18.425 6.14995 18.9406C6.14995 19.4219 5.73745 19.8687 5.22183 19.8687Z"
                fill=""
              />
              <path
                d="M19.0062 0.618744H17.15C16.325 0.618744 15.6031 1.23749 15.5 2.06249L14.95 6.01562H1.37185C1.0281 6.01562 0.684353 6.18749 0.443728 6.46249C0.237478 6.73749 0.134353 7.11562 0.237478 7.45937C0.237478 7.49374 0.237478 7.49374 0.237478 7.52812L2.36873 13.9562C2.50623 14.4375 2.9531 14.7812 3.46873 14.7812H12.9562C14.2281 14.7812 15.3281 13.8187 15.5 12.5469L16.9437 2.26874C16.9437 2.19999 17.0125 2.16562 17.0812 2.16562H18.9375C19.35 2.16562 19.7281 1.82187 19.7281 1.37499C19.7281 0.928119 19.4187 0.618744 19.0062 0.618744ZM14.0219 12.3062C13.9531 12.8219 13.5062 13.2 12.9906 13.2H3.7781L1.92185 7.56249H14.7094L14.0219 12.3062Z"
                fill=""
              />
            </svg>
          </CardData>
          <CardData title="30 Hari Terakhir" total="20 cm" rate="2.59%" levelUp>
            <svg
              className="fill-primary dark:fill-white"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                fill=""
              />
              <path
                d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                fill=""
              />
            </svg>
          </CardData>
        </div>

        <div class="pt-4 pb-4 mt-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-1">
          <div class="col-span-2 md:mr-6 mb-6">
            <div className="max-w-[800px]  rounded-lg shadow-lg border border-stroke ">
              <header className="warning-page text-xl font-bold">
                Ketinggian Air Laut
              </header>
              <div className="mx-4">
                {" "}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-gray-600">⏰ {formatDate(currentDate)}</p>
                  </div>
                  <div className="flex items-center">
                    <select
                      className="border border-collapse ml-2 px-2 rounded-lg p-0"
                      id="timeRange"
                      value={timeRange}
                      onChange={handleTimeRangeChange}
                    >
                      <option value="hariini">Hari ini</option>
                      <option value="mingguini">Minggu ini</option>
                      <option value="bulanini">Bulan ini</option>
                      <option value="bulan">Pilih Bulan</option>
                    </select>
                    {timeRange === "bulan" && (
                    <select value={selectedMonth} onChange={handleMonthChange}>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i}>
                          {new Date(0, i).toLocaleString("default", { month: "long" })}
                        </option>
                      ))}
                    </select>
                  )}
                  </div>
                </div>
                <Plot
                  className="flex w-full h-[300px]"
                  data={[
                    {
                      x: xDataCombined,
                      y: yDataCombined,
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                      name: "Combined Sensor Data",
                    },
                  ]}
                  layout={{
                    xaxis: { title: "Time(h)" },
                    yaxis: { title: "Water level(cm)" },
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="max-w-[800px] rounded-lg  shadow-lg border border-stroke  ">
                <header className="warning-page text-xl font-bold">
                  Suhu Lingkungan Sistem
                </header>
                <div className="mx-4">
                  {" "}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-gray-600">⏰ {formatDate(currentDate)}</p>
                    </div>
                  </div>
                  <Plot
                    className="flex w-full  h-[300px]"
                    data={[
                      {
                        x: xDataSuhu,
                        y: yDataSuhu,
                        type: "scatter",
                        mode: "lines+markers",
                        marker: { color: "blue" },
                        name: "Sensor Suhu",
                      },
                    ]}
                    layout={{
                      xaxis: { title: "Time(h)" },
                      yaxis: { title: "Temperature(°C)" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div className="status-card rounded-lg shadow-lg w-full max-w-[500px] p-4">
              <div className="warning-header text-base font-bold mb-4">
                <h2>Status</h2>
              </div>
              <div className="warning-content">
                <div className="warning-level flex justify-between items-center mb-4">
                  <div className="status-icons flex items-center">
                  <StatusIcon status={statusUltrasonic}>{statusUltrasonic}</StatusIcon>
                  </div>
                  <span className="time-ago text-gray-500">⏰ {formatDate(currentDate)}</span>
                </div>
                <div className="warning-details">
                  <div className="time-info flex justify-between mb-2">
                    <span>Sealling</span>
                    <span>{currentTime.toLocaleTimeString()}</span>
                  </div>
                  <p className="mb-2">
                    Status Sensor Ultrasonic saat ini: {statusUltrasonic}
                    <br />
                    Waktu terdeteksi: {waktuUltrasonic}
                  </p>
                  <p>
                    Status Sensor Submersible saat ini: {statusSubmersible}
                    <br />
                    Waktu terdeteksi: {waktuSubmersible}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg mt-4 shadow-lg  w-full max-w-[500px] ">
              <div class="warning-header text-base font-bold">
                <h2>Baterai</h2>
              </div>
              <div class="warning-content">
                <div class="warning-level">
                  <div className="flex items-center justify-center  mx-auto">
                    <div className="text-center">
                      {batteryInfo.supported ? (
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <BatteryInfo 
                          batteryInfo={batteryInfo}
                          isCharging={batteryInfo.charging}
                          supported={batteryInfo.supported}
                          />
                        </div>
                      ) : (
                        <div className="p-4 rounded-md bg-gray-200 text-gray-700">
                          Battery status is not supported in this browser.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4 max-w-[400px]  bg-white w-auto h-auto  rounded-lg border shadow-lg">
              <div className="warning-page text-base font-bold  text-slate-900 mb-4">
                Lokasi
              </div>
              <div className="justify-center px-4 pb-4">
                <div className="justify-center ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63360.366282956194!2d107.63940574009342!3d-7.006587075948274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1718549027955!5m2!1sid!2sid"
                    width="100% "
                    height="250"
                    style={{
                      color: "red",
                      fontSize: "16px",
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    title="Alamat Rumah Pompa"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;
