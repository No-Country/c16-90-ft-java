import React, { useState, useEffect } from "react";
import SectionBooks from "./SectionBooks";

const category = [
  { name: "Young Adult" },
  { name: "Fiction" },
  { name: "Science Fiction" },
  { name: "Dystopia" },
  { name: "Fantasy" },
  { name: "Historical" },
  { name: "Historical Fiction" },
  { name: "Academic" },
  { name: "School" },
  { name: "Romance" },
  { name: "Paranormal" },
  { name: "Vampires" },
  { name: "Literature" },
  { name: "Politics" },
  { name: "Novels" },
  { name: "Read For School" },
  { name: "Classics" },
];

const Home = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [categorySelect, setCategorySelect] = useState("");

  const [books, setBooks] = useState([]);

  const [filterValue, setFilterValue] = useState([]);
  const [message, setMessage] = useState("");

  //pedir datos a la api
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://example-data.draftbit.com/books?_limit=50"
      );

      const data = await response.json();

      if (data) {
        setBooks(data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Lógica para realizar la búsqueda
    const lowerCaseValue = currentValue.toLowerCase();

    const filteredBooks = books.filter((elem) => {
      if (lowerCaseValue) {
        return (
          elem.title.toLowerCase().includes(lowerCaseValue) ||
          elem.authors.toLowerCase().includes(lowerCaseValue)
        );
      } else {
        return [...books]; // Si ninguna condición es verdadera, incluir todos los libros
      }
    });

    // Actualizar el estado con los libros filtrados
    setFilterValue(filteredBooks);

    // Verificar si se encontraron libros
    if (filteredBooks.length === 0) {
      setMessage("No se encontraron libros");
    } else {
      setMessage(""); // Reiniciar el mensaje si se encontraron libros
    }
  }

  useEffect(() => {
    const lowerCaseCategorySelect = categorySelect.toLowerCase();

    const filteredBooks = books.filter((elem) => {
      if (lowerCaseCategorySelect) {
        return elem.genres.toLowerCase().includes(lowerCaseCategorySelect);
      }
      return true;
    });

    // Limpiar el mensaje cuando cambie la categoría
    setMessage("");

    setFilterValue(filteredBooks);
  }, [categorySelect, books]);

  //llamada de api
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main>
      <nav className="w-full flex flex-col gap-2">
        <ul className="flex gap-4 flex-wrap">
          {category.map((items, index) => (
            <li
              key={index}
              className="py-2 px-3 text-sm bg-muted rounded-md flex items-center gap-x-1 bg-slate-200 transition cursor-pointer hover:bg-slate-400"
              onClick={(e) => setCategorySelect(e.target.innerText)}
            >
              {items.name}
            </li>
          ))}
        </ul>
        <form className="flex max-w-xl" onSubmit={handleSubmit}>
          <input
            className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full  rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
            placeholder="Search book - authors"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
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
      <SectionBooks books={filterValue} message={message} />
    </main>
  );
};

export default Home;
