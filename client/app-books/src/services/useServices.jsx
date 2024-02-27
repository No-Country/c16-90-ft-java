import React, { useState } from "react";

const API_URL = "https://example-data.draftbit.com/books?_limit=50";

const useServices = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (data) setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Error al cargar los libros. Por favor, inténtalo de nuevo.");
    }
  };

  const createBook = async (bookData) => {
    try {
      const response = await fetch("/api/books/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agrega cualquier otra cabecera necesaria aquí
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzamos un error
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData; // Devolver solo los datos necesarios
    } catch (error) {
      console.error("Error en la función createBook:", error);
      throw new Error(
        "Error en la creación del libro. Por favor, inténtalo de nuevo."
      );
    }
  };

  return {
    fetchBooks,
    books,
    error,
    createBook,
  };
};

export default useServices;
