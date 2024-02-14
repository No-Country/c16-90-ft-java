import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const SectionBooks = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://example-data.draftbit.com/books?_limit=50"
      );

      const data = await response.json();

      if (data) {
        setBooks(data);
        console.log(books);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-10">
      {books.map((book, index) => (
        <Cards
          title={book.title}
          authors={book.authors}
          genres={book.genres}
          description={book.description}
          image={book.image_url}
        />
      ))}
    </div>
  );
};

export default SectionBooks;
