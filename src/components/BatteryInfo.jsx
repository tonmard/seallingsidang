import React from "react";

const BatteryInfo = ({ batteryInfo }) => (
  <div
    className={`w-56 lg:w-80 h-14 border-2 ${
      batteryInfo ? "border-slate-900" : "border-gray-500"
    } rounded-lg flex w-full items-center justify-start overflow-hidden relative`}
  >
    {/* Battery level bar */}
    <div
      className={`${
        batteryInfo.level > 20 ? "bg-green-300" : "bg-red-500"
      } h-full`}
      style={{ width: `${batteryInfo.level}%` }}
    ></div>
    {/* Battery level text */}
    <div className="absolute w-full h-full flex items-center text-slate-700 justify-center text-lg font-semibold">
      {batteryInfo.level.toFixed(0)}%
    </div>
  </div>
);

export default BatteryInfo;
