import React from "react";
import { GrPowerReset } from "react-icons/gr";

const Categories = ({ setCategorySelect, handleReset }) => {
  const category = [
    { name: "Young Adult" },
    { name: "Fiction" },
    { name: "Science Fiction" },
    { name: "Dystopia" },
    { name: "Fantasy" },
    { name: "Historical" },
    { name: "Historical Fiction" },
    { name: "Academic" },
    { name: "School" },
    { name: "Romance" },
    { name: "Paranormal" },
    { name: "Vampires" },
    { name: "Literature" },
    { name: "Politics" },
    { name: "Novels" },
    { name: "Read For School" },
    { name: "Classics" },
  ];

  return (
    <div className="container px-5 flex flex-col md:flex-row gap-12 items-center mx-auto xl:ml-[6rem] 2xl:ml-0">
      <div className="flex gap-5">
        <select
          name=""
          id=""
          className=" bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          onChange={(e) => setCategorySelect(e.target.value)}
        >
          {category.map((items, index) => (
            <option
              key={index}
              className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-3 md:my-0 cursor-pointer"
              value={items.name}
            >
              {items.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleReset}
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
        >
          <GrPowerReset size={20} />
        </button>
      </div>
    </div>
  );
};

export default Categories;
