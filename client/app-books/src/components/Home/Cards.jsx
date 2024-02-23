import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, authors, genres, image, description, id }) => {
  const genresArray = genres.split(",");
  return (
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 ">
        <div className="bg-gray-100 p-6 rounded-lg cursor-pointer">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={image}
            alt={title}
          />
          <h3 className="tracking-widest text-[#5A5A5A] text-xs font-medium title-font">
            {authors}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <div className="flex items-center flex-wrap mt-4">
            <Link
              className="text-boxdark-2 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
              to={`detail/${id}`}
            >
              Ver más
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-1 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
