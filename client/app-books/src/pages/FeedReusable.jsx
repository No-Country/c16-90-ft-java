import React, { useEffect, useState } from "react";
import { useFavoriteContext } from "../hooks/FavReadWish";
import useServices from "../services/useServices";

const FeedReusable = ({ section, listName }) => {
  const { favorite } = useFavoriteContext();
  const bookList = favorite[listName];

  const [newList, setNewList] = useState([]);

  const { fetchBooks, books } = useServices();

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filtrar libros basándose en los IDs de bookList
  useEffect(() => {
    const filteredBooks = books.filter((book) =>
      bookList.some((item) => item.id === String(book.id))
    );
    setNewList(filteredBooks);
  }, [books, bookList]);

  return (
    <div className="w-3/4 bg-gray-500 p-4">
      <h2 className="text-2xl font-bold mb-4">{section}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newList.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeedReusable;
