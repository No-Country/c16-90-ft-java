import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Skeleton from "../Skeleton";

const BookCard = ({ id, title, authors, genres, description, image_url }) => (
  <Cards
    key={id}
    id={id}
    title={title}
    authors={authors}
    genres={genres}
    description={description}
    image={image_url}
  />
);

const SectionBooks = ({ books, message, loading }) => {
  const [view, setView] = useState(false);

  const renderBooks = (booksArray) =>
    booksArray.map((book) => <BookCard key={book.id} {...book} />);

  return (
    <section className="text-gray-600 body-font" id="books">
      <div className="container px-5 mx-auto">
        {message && <p>{message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full place-content-center">
          {loading
            ? Array.from({ length: view ? books.length : 12 }).map(
                (_, index) => <Skeleton key={index} />
              )
            : view
            ? renderBooks(books)
            : renderBooks(books.slice(0, 12))}
        </div>
        {books.length > 12 && (
          <button
            className="bg-[#292929] hover:bg-[#606060] text-white font-bold py-2 px-4 rounded mx-auto flex justify-center items-center my-12"
            onClick={() => setView(!view)}
          >
            {view ? "See less" : "See more"}
          </button>
        )}
      </div>
    </section>
  );
};

export default SectionBooks;
