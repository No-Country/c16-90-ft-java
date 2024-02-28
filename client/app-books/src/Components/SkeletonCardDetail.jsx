import React from "react";

const SkeletonCardDetail = () => {
  return (
    <div className="container px-5 py-24 mx-auto animate-pulse">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="w-1/4 h-6 mb-4 bg-boxdark rounded dark:bg-gray-700"></h2>
          <h1 className="w-3/4 h-8 mb-8 bg-boxdark rounded dark:bg-gray-700"></h1>
          <div className="flex mb-4">
            <a className="flex-grow  py-2 text-lg px-1 w-1/4 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></a>
          </div>
          <p className="w-full h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-1/2 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-3/4 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-1/2 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-1/4 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-2/3 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <p className="w-1/3 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500 w-1/4 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></span>
            <span className="ml-auto text-gray-900 w-1/2 h-4 bg-boxdark rounded dark:bg-gray-700"></span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="w-1/4 h-4 mb-4 bg-boxdark rounded dark:bg-gray-700"></span>
            <span className="ml-auto text-gray-900 w-1/4 h-4 bg-boxdark rounded dark:bg-gray-700"></span>
          </div>
          <div className="flex w-full justify-end">
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <div className="w-6 h-6 bg-boxdark rounded dark:bg-gray-700"></div>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full  h-[600px] bg-boxdark rounded dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SkeletonCardDetail;
