import React, { useState, useEffect } from "react";

const ModalCards = ({ active, book, onClose }) => {
  const toggleModal = () => {
    onClose();
  };

  //   const genresArray = book.genres.split(",");
  console.log(book);
  return (
    <div>
      {active && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden={true}
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full bg-gray-900 "
          style={{ background: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="relative w-full max-w-md max-h-full m-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden={true}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8 mx-auto m-auto mt-[11rem]">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {book ? book.title : ""}
                </h3>
                <img
                  alt={book.title}
                  src={book.image_url}
                  className="h-70 w-full object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {book.genres
                      ? book.genres.split(",").map((genre, index) => (
                          <p
                            key={index}
                            className="py-2 px-3 text-sm bg-muted flex items-center gap-x-1 bg-gray-400 transition cursor-pointer hover:bg-slate-400"
                          >
                            #{genre}
                          </p>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCards;
