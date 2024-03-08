import React, { useState, useEffect, useMemo } from "react";
import SectionBooks from "./SectionBooks";
import Hero from "./Hero";
import Categories from "./Categories";
import useServices from "../../services/useServices";
import SearchForm from "../../Components/Home/SearchForm";
import { Footer } from "../Footer";

const NotFoundMessage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center  px-6 py-12 mx-auto ">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            There were no coincidences
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            We have not been able to find the requested book
          </p>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  //pedir datos a la api
  const { fetchBooks, books } = useServices();

  const lowerCaseValue = currentValue.toLowerCase();

  //solo se recalculará si books o lowerCaseValue cambian, esto evita que la función se vuelva a crear en cada renderizado,
  const handleSearch = useMemo(() => {
    return () => {
      const filteredBooks = books.filter(
        ({ title, authors }) =>
          (lowerCaseValue &&
            (title.toLowerCase().includes(lowerCaseValue) ||
              authors.toLowerCase().includes(lowerCaseValue))) ||
          !lowerCaseValue
      );

      setLoading(true);

      const timeoutId = setTimeout(() => {
        setLoading(false);
        setFilterValue(filteredBooks); // Mueve esta línea fuera de la declaración return
        setMessage(filteredBooks.length === 0 && <NotFoundMessage />);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
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
    setLoading(true); // Activar estado de carga

    const timeoutId = setTimeout(() => {
      const filteredBooks = books.filter((elem) => {
        if (lowerCaseCategorySelect) {
          return elem.genres.toLowerCase().includes(lowerCaseCategorySelect);
        }
        return true;
      });

      setMessage("");
      setFilterValue(filteredBooks);
      setLoading(false); // Desactivar estado de carga después de procesar los libros filtrados
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [lowerCaseCategorySelect, books]);

  //llamada de api y evitan realizar la llamada si los datos ya han sido cargados.
  useEffect(() => {
    if (books.length === 0) {
      fetchBooks();
    }
  }, [books, fetchBooks]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [books]);

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
      <SectionBooks books={filterValue} message={message} loading={loading} />
      <div></div>
      <Footer />
    </main>
  );
};

export default Home;
