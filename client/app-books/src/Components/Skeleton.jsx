import React from "react";

const Skeleton = () => {
  return (
    <section className="max-w-sm">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="w-full ">
          <div className="w-full h-40 bg-boxdark rounded-lg mb-6 dark:bg-gray-600"></div>

          <p className="w-24 h-2 mt-4 bg-boxdark  rounded-lg dark:bg-gray-700"></p>
          <h1 className="w-56 h-2 mt-4 bg-boxdark  rounded-lg dark:bg-gray-700"></h1>
          <p className="w-70 h-2 mt-4 bg-boxdark  rounded-lg dark:bg-gray-700"></p>
          <p className="w-75 h-2 mt-4 bg-boxdark  rounded-lg dark:bg-gray-700"></p>
          <p className="w-70 h-2 mt-4 bg-boxdark  rounded-lg dark:bg-gray-700"></p>
        </div>
      </div>
    </section>
  );
};

export default Skeleton;
