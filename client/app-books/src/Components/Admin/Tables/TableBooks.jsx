import { useState, useEffect } from "react";
import ModalCards from "../ModalCards";

const TableTwo = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://example-data.draftbit.com/books?_limit=50"
      );
      const data = await response.json();

      if (data) setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ModalCards
        active={!!selectedBook}
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

      <div className="grid grid-cols-5 gap-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
        {books.map((product, key) => (
          <a
            href="#"
            className="block"
            key={key}
            onClick={() => handleBookClick(product)}
          >
            <img
              alt={product.title}
              src={product.image_url}
              className="h-30 w-full object-cover"
            />

            <h3 className="mt-4 text-md font-bold text-gray-900">
              {product.title}
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">{product.authors}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
