import React from "react";
import { Link } from "react-router-dom";

const AdminButtonsSession = ({ title }) => {
  return (
    <div className="flex flex-col p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-w-lg mt-[10rem]">
      <h2 className="text-lg font-semibold text-graydark capitalize dark:text-white text-center my-4">
        {title}
      </h2>

      <div className="flex flex-col gap-2">
        <Link
          to={"signin"}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-graydark rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Login
        </Link>
        <Link
          to={"signup"}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-graydark rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default AdminButtonsSession;
