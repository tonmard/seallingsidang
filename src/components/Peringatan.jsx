import React, { useState, useEffect, useCallback } from "react";
import { waves } from "../constants";

const Peringatan = () => {
  const [ultrasonicData, setUltrasonicData] = useState({ statusData: [], dateData: [] });
  const [submersibleData, setSubmersibleData] = useState({ statusData: [], dateData: [] });
  const [previousUltrasonicData, setPreviousUltrasonicData] = useState(null);
  const [previousSubmersibleData, setPreviousSubmersibleData] = useState(null);

  const TELEGRAM_BOT_TOKEN = '7402465364:AAF1NBcho2tmZeqbn74X89YMJ71Tfd1fIHM';
  const TELEGRAM_CHAT_ID = '-1002213571275';

  const fetchData = async (url, setData, dataKey) => {
    try {
      console.log(`Fetching data from ${url}`);
      const response = await fetch(url);
      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log(`Data fetched successfully from ${url}:`, data);

          if (data && data[dataKey] && Array.isArray(data[dataKey]) && data[dataKey].length > 0) {
            const firstElement = data[dataKey][0];
            setData({
              statusData: [firstElement.status],
              dateData: [firstElement.date],
            });
          } else {
            setData({ statusData: [], dateData: [] });
            console.log(`No valid data found in ${url}`);
          }
        } else {
          console.error('Unexpected content type:', contentType);
        }
      } else {
        console.error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
    
  const fetchDataUltrasonic = useCallback(() => {
    fetchData('https://sealling.iot4environment.com/admin/data_ultrasonic.php', setUltrasonicData, 'sensor_ultrasonic');
  }, []);
  
  const fetchDataSubmersible = useCallback(() => {
    fetchData('https://sealling.iot4environment.com/admin/data_submersible.php', setSubmersibleData, 'sensor_submersible');
  }, []);
  
  const sendTelegramNotification = async (message) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    };

    try {
      console.log(`Sending notification to Telegram: ${message}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to send Telegram message: ${errorText}`);
      } else {
        console.log('Notification sent successfully to Telegram');
      }
    } catch (err) {
      console.error('Error sending Telegram message:', err);
    }
  };

  const sendNotifications = useCallback(async (sensorType, statusData, dateData) => {
    const message = `${sensorType} Sensor Alert!\nStatus: ${statusData[0]}\nDate: ${dateData[0]}`;

    try {
      if (statusData[0] === 'Bahaya' || statusData[0] === 'Siaga') {
        console.log(`Preparing to send notification for ${sensorType} sensor.`);
        await sendTelegramNotification(message);
      } else {
        console.log(`No notification needed for ${sensorType} sensor. Status: ${statusData[0]}`);
      }
    } catch (err) {
      console.error('Error sending notifications:', err);
    }
  }, []);

  const checkForNewData = useCallback(() => {
    console.log('Checking for new data...');

    // Check if the fetched ultrasonic data is new
    if (ultrasonicData.statusData.length > 0 && (
        !previousUltrasonicData ||
        previousUltrasonicData.statusData[0] !== ultrasonicData.statusData[0] ||
        previousUltrasonicData.dateData[0] !== ultrasonicData.dateData[0]
      )) {
      console.log('New ultrasonic data detected:', ultrasonicData);
      sendNotifications('Ultrasonic', ultrasonicData.statusData, ultrasonicData.dateData);
      setPreviousUltrasonicData(ultrasonicData);  // Update the previous data
    } else {
      console.log('No new ultrasonic data detected.');
    }

    // Check if the fetched submersible data is new
    if (submersibleData.statusData.length > 0 && (
        !previousSubmersibleData ||
        previousSubmersibleData.statusData[0] !== submersibleData.statusData[0] ||
        previousSubmersibleData.dateData[0] !== submersibleData.dateData[0]
      )) {
      console.log('New submersible data detected:', submersibleData);
      sendNotifications('Submersible', submersibleData.statusData, submersibleData.dateData);
      setPreviousSubmersibleData(submersibleData);  // Update the previous data
    } else {
      console.log('No new submersible data detected.');
    }
  }, [ultrasonicData, submersibleData, previousUltrasonicData, previousSubmersibleData, sendNotifications]);

  useEffect(() => {
    fetchDataUltrasonic();
    fetchDataSubmersible();

    const intervalId = setInterval(() => {
      fetchDataUltrasonic();
      fetchDataSubmersible();
    }, 60000); // Fetch data every minute

    return () => clearInterval(intervalId); 
  }, [fetchDataUltrasonic, fetchDataSubmersible]);

  useEffect(() => {
    checkForNewData();

    const intervalId = setInterval(checkForNewData, 60000); // Check for new data every minute

    return () => clearInterval(intervalId); 
  }, [checkForNewData]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="w-full py-10 bg-white px-6">
      <div className="max-w-md md:w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animated">
        <div className="md:justify-center">
          <div className="md:justify-center">
            <img
              className="h-48 w-full object-cover"
              src={waves}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6">
            <h1 className="block mt-1 font-serif text-2xl md:text-3xl my-6 font-medium text-center text-slate-900">
              Dapatkan Peringatan Dini!
              <p className="text-slate-600 text-xs pl-4 p-1">
                Daftarkan dirimu dan dapatkan fitur peringatan dini sekarang.
              </p>
            </h1>
            <button
              type="button"
              onClick={() => window.location.href = 'https://t.me/+jaoNjSIDGVgxYzZl'}
              className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto"
            >
              Dapatkan Early Warning
            </button>
            <button
              onClick={handleGoHome}
              className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white bg-slate-900 text-white h-10 mt-5 rounded-full font-medium mx-auto"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peringatan;
