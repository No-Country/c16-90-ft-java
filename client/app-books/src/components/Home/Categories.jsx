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
    <>
      <h2 class="text-start my-4">
        <span class=" text-2xl lg:text-3xl font-semibold ">Categorias</span>
      </h2>
      <ul className="flex gap-4 flex-wrap">
        {category.map((items, index) => (
          <li
            key={index}
            className="py-2 px-3 text-sm bg-muted text-white rounded-md flex items-center gap-x-1 bg-yellow-500 transition cursor-pointer hover:bg-slate-400"
            onClick={(e) => setCategorySelect(e.target.innerText)}
          >
            {items.name}
          </li>
        ))}
        <button
          onClick={handleReset}
          className="py-2 px-3 text-sm bg-muted rounded-md flex items-center gap-x-1 bg-slate-200 transition cursor-pointer hover:bg-slate-400"
        >
          reset
        </button>
      </ul>
    </>
  );
};

export default Categories;
