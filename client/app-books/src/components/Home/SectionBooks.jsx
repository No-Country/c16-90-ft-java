import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const SectionBooks = ({ books, message }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-4 gap-4 mt-10 mx-auto justify-center items-center">
        {message && <p>{message}</p>}
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
  );
};

export default SectionBooks;
