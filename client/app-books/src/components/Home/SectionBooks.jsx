import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const SectionBooks = ({ books, message }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        {message && <p>{message}</p>}
        <div className="grid-col-1 xl:grid 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 w-full">
          {books.map((book, index) => (
            <Cards
              key={index}
              title={book.title}
              authors={book.authors}
              genres={book.genres}
              description={book.description}
              image={book.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionBooks;
