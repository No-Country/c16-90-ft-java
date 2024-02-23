import React from "react";

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
    <div className="container px-5 flex gap-12 items-center mx-auto">
      <h2 className="text-start my-4">
        <span className=" text-2xl lg:text-3xl font-semibold ">Categorias</span>
      </h2>

      <select
        name=""
        id=""
        className=" py-3 -mx-3"
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
        className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
      >
        reset
      </button>
    </div>
  );
};

export default Categories;
