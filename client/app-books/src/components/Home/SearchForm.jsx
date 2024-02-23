import React from "react";

const SearchForm = ({ currentValue, setCurrentValue, handleSubmit }) => {
  return (
    <form
      className="border-b-blue-600 focus-within:border-none focus-within:ring focus-within:ring-offset-2 my-10 flex h-10 items-center justify-start border-b-2 bg-gray-100 leading-4 ring-blue-600 sm:w-96"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search"
        className="peer ml-2 flex-grow bg-transparent text-gray-500 outline-none"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <button
        type="button"
        className="peer-focus:mr-2 z-20 cursor-pointer text-blue-600 outline-none duration-150 hover:scale-125"
      >
        <svg className="h-6 w-6 stroke-2" viewBox="0 0 32 32" fill="none">
          <circle
            cx="15"
            cy="14"
            r="8"
            stroke="currentColor"
            fill="transparent"
          ></circle>
          <line
            x1="21.1514"
            y1="19.7929"
            x2="26.707"
            y2="25.3484"
            stroke="currentColor"
            fill="transparent"
          ></line>
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
