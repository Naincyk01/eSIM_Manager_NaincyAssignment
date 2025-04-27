import React from "react";

const UsageBar = ({ used, total }) => {
  const usedPercentage = (parseFloat(used) / parseFloat(total)) * 100;

  return (
    <div className="bg-gray-200 rounded-full h-3 sm:h-4 relative overflow-hidden">
      <div
        className="bg-blue-500 h-full absolute left-0 top-0"
        style={{ width: `${usedPercentage}%` }}
      ></div>
    </div>
  );
};

export default UsageBar;
