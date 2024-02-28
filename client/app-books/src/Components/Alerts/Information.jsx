import React from "react";

const Information = () => {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
      role="alert"
    >
      <p className="font-bold">Informational message</p>
      <p className="text-sm">Some additional text to explain said message.</p>
    </div>
  );
};

export default Information;
