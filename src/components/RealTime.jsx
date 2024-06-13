import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const RealTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulasi pengumpulan data
    const interval = setInterval(() => {
      const newData = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100)
      );
      setData(newData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          DASHBOARD MONITORING
        </h1>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600">Semarang - Rumah Pompa KITS</p>
            <p className="text-gray-600">13th June, 2024</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Minggu Ini
            </button>
            <input type="date" className="border rounded px-4 py-2" />
          </div>
        </div>
      </header>
      <div className="bg-white shadow-md rounded p-4">
        <Plot
          data={[
            {
              x: Array.from({ length: data.length }, (_, i) => i),
              y: data,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
              name: "Sungai",
            },
            {
              x: Array.from({ length: data.length }, (_, i) => i),
              y: data.map((d) => d - 50),
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "green" },
              name: "Penyimpanan lama",
            },
          ]}
          layout={{
            title: "Tingkat Air",
            xaxis: { title: "Time(h)" },
            yaxis: { title: "Water level(m)" },
          }}
        />
      </div>
    </div>
  );
};

export default RealTime;
