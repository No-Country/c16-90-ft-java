import React, { useState, useEffect, useMemo } from "react";
import SectionBooks from "./SectionBooks";
import Hero from "./Hero";
import Categories from "./Categories";
import useServices from "../../services/useServices";
import SearchForm from "../../Components/Home/SearchForm";

const Home = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [message, setMessage] = useState("");

  //pedir datos a la api
  const { fetchBooks, books } = useServices();

  const lowerCaseValue = currentValue.toLowerCase();

  //solo se recalculará si books o lowerCaseValue cambian, esto evita que la función se vuelva a crear en cada renderizado,
  const handleSearch = useMemo(() => {
    return () => {
      const filteredBooks = books.filter(
        (elem) =>
          (lowerCaseValue &&
            (elem.title.toLowerCase().includes(lowerCaseValue) ||
              elem.authors.toLowerCase().includes(lowerCaseValue))) ||
          !lowerCaseValue
      );
      setFilterValue(filteredBooks);
      setMessage(filteredBooks.length === 0 ? "No se encontraron libros" : "");
    };
  }, [books, lowerCaseValue]);

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

  const lowerCaseCategorySelect = useMemo(
    () => categorySelect.toLowerCase(),
    [categorySelect]
  );

  useEffect(() => {
    const filteredBooks = books.filter((elem) => {
      if (lowerCaseCategorySelect) {
        return elem.genres.toLowerCase().includes(lowerCaseCategorySelect);
      }
      return true;
    });

    setMessage("");
    setFilterValue(filteredBooks);
  }, [lowerCaseCategorySelect, books]);

  //llamada de api y evitan realizar la llamada si los datos ya han sido cargados.
  useEffect(() => {
    if (books.length === 0) {
      fetchBooks();
    }
  }, [books, fetchBooks]);

  return (
    <main>
      <Hero />
      <nav className="max-w-[1536px] mx-auto flex flex-col md:flex-row gap-2 border-t-2 py-8 sm:mx-6 xl:mx-0 2xl:mx-auto">
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
