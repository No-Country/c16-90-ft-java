import React, { useState } from "react";

const API_URL = "https://example-data.draftbit.com/books?_limit=50";

const useServices = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data) setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return {
    fetchBooks,
    books,
  };
};

export default useServices;
