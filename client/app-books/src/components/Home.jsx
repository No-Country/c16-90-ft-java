import React from "react";
import Cards from "./Cards";
import SectionBooks from "./SectionBooks";

const category = [
  { name: "Aventura" },
  { name: "Ciencia Ficción" },
  { name: "Policiaca" },
  { name: "Terror y suspenso" },
  { name: "Romantica" },
  { name: "Poesá" },
];

const Home = () => {
  return (
    <main>
      <nav className="w-full flex gap-2">
        <ul className="flex gap-4">
          {category.map((items, index) => (
            <li
              key={index}
              className="py-2 px-3 text-sm bg-muted rounded-md flex items-center gap-x-1 bg-slate-200 transition cursor-pointer hover:bg-slate-400"
            >
              {items.name}
            </li>
          ))}
        </ul>
        <form className="flex items-center  flex-1">
          <input
            className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full  rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
            placeholder="Search book"
            value=""
          />
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search h-4 w-4"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
        </form>
      </nav>
      {/* <Cards /> */}
      <SectionBooks />
    </main>
  );
};

export default Home;
