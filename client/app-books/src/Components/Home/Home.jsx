import React, { useState, useEffect } from "react";
import SectionBooks from "./SectionBooks";
import Hero from "../Home/Hero";
import Categories from "./Categories";
import useServices from "../../services/useServices";
import SearchForm from "./SearchForm";

const Home = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [message, setMessage] = useState("");

  //pedir datos a la api
  const { fetchBooks, books } = useServices();

  const lowerCaseValue = currentValue.toLowerCase();

  const handleSearch = () => {
    const filteredBooks = books.filter(
      (elem) =>
        (lowerCaseValue &&
          (elem.title.toLowerCase().includes(lowerCaseValue) ||
            elem.authors.toLowerCase().includes(lowerCaseValue))) ||
        !lowerCaseValue // Incluye todos los libros si no hay un valor de búsqueda
    );

    setFilterValue(filteredBooks);
    setMessage(filteredBooks.length === 0 ? "No se encontraron libros" : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleReset = () => {
    setCurrentValue("");
    setCategorySelect("");
    setFilterValue(books);
    setMessage("");
  };

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
      <Hero />
      <nav className="max-w-[1536px] mx-auto flex flex-col gap-2 border-t-2 py-8">
        <Categories
          setCategorySelect={setCategorySelect}
          handleReset={handleReset}
        />
        <SearchForm
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          handleSubmit={handleSubmit}
        />
      </nav>
      <SectionBooks books={filterValue} message={message} />
      <div></div>
    </main>
  );
};

export default Home;
