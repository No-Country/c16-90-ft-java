import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import Comments from "./Comments";

const CardDetails = () => {
  const [dataBook, setDataBook] = useState([]);

  const { id } = useParams();

  async function callBookId(id) {
    try {
      const response = await fetch(
        `https://example-data.draftbit.com/books/${id}`
      );
      const data = await response.json();
      if (data) setDataBook(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    callBookId(id);
  }, [id]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
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
            <div className="flex w-full justify-end">
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
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
