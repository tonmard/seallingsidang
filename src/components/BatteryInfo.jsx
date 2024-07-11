import React from "react";
import ChargingIcon from "./ChargingIcon";

const BatteryInfo = ({ batteryInfo }) => (
  <div
    className={`w-32 h-14 border-2 ${
      batteryInfo.charging ? "border-green-500" : "border-gray-500"
    } rounded-lg flex items-center justify-start overflow-hidden relative`}
  >
    {/* Battery level bar */}
    <div
      className={`${
        batteryInfo.level > 20 ? "bg-green-300" : "bg-red-500"
      } h-full`}
      style={{ width: `${batteryInfo.level}%` }}
    ></div>
    {/* Battery level text */}
    <div className="absolute w-full h-full flex items-center justify-center text-lg font-semibold">
      {batteryInfo.level.toFixed(0)}%
    </div>
    {batteryInfo.charging && <ChargingIcon />}
  </div>
);

export default BatteryInfo;
