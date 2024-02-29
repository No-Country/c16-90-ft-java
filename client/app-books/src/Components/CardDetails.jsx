import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import Comments from "./Comments";
import SkeletonCardDetail from "./SkeletonCardDetail";

const CardDetails = () => {
  const [dataBook, setDataBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const callBookId = useCallback(async (bookId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://example-data.draftbit.com/books/${bookId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data) {
        setDataBook(data);
      }
    } catch (error) {
      console.error("Error", error);
      setError(
        "Error al cargar los detalles del libro. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBookId(id);
  }, [id, callBookId]);

  if (loading) {
    // Puedes mostrar un indicador de carga aquí
    return <SkeletonCardDetail />;
  }

  if (error) {
    // Puedes mostrar un mensaje de error aquí
    return <p>{error}</p>;
  }

  return (
    <section
      className="text-gray-600 body-font  h-screen
    "
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {dataBook && dataBook.authors}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {dataBook && dataBook.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              {dataBook && dataBook.description}
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Generos</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {dataBook?.genres?.split(",").slice(0, 2).join(", ")}
                {dataBook?.genres?.length > 2 && " +"}
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Rating</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {dataBook && dataBook.rating}
              </span>
            </div>
            {dataBook && dataBook.edition && (
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Edition</span>
                <span className="ml-auto text-gray-900">
                  {dataBook && dataBook.edition}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-4 mt-5">
              <div class="dark:bg-black/10 flex items-center gap-2">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                  type="checkbox"
                />
                <label class="text-boxdark-2">Read</label>
              </div>
              <div class="dark:bg-black/10 flex items-center gap-2">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                  type="checkbox"
                />
                <label class="text-boxdark-2">Favorite</label>
              </div>
            </div>
          </div>
          <img
            alt={dataBook && dataBook.title}
            className="lg:w-1/2 w-full  h-[600px] object-cover object-center rounded "
            src={dataBook && dataBook.image_url}
          />
        </div>
      </div>
      <div className="bg-boxdark-2">
        <div className="container px-30 pb-[6rem] mx-auto bg-boxdark-2 pt-20">
          <CommentSection bookId={id} />
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
