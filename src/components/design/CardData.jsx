import React from "react";

const CardData = ({ title, ultrasonic, submersible, rate, levelUp, levelDown }) => {
  return (
    <div className="rounded-lg border-l-[15px] border-slate-900 w-auto border-stroke p-6 shadow-lg">
      {/* Title Section */}
      <div className="flex flex-col mb-4">
        <span className="text-sm font-medium">{title}</span>
      </div>

      {/* Ultrasonic and Submersible Section */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Ultrasonic:</span>
          <span className="text-sm font-medium">{ultrasonic}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm font-medium">Submersible:</span>
          <span className="text-sm font-medium">{submersible}</span>
        </div>
      </div>

      {/* Rate Section with Level Indicators */}
      <div className="flex justify-between items-center">
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp ? "text-meta-3" : levelDown ? "text-meta-5" : ""
          }`}
        >
          {rate}
          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardData;
