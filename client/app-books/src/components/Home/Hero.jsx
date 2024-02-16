import React from "react";
import bookSvg from "/books.svg";

const Hero = () => {
  return (
    <header className="bg-white ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl text-start">
                Mejor lugar para descubrir <br /> tus{" "}
                <span className="text-[#F3B331]">nuevas historias</span>
              </h1>

              <p className="mt-3 text-gray-600 text-start">
                Encuentra las mejores obras literarias que te transportarán a
                lugares inimaginables.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#F3B331] rounded-lg lg:w-auto focus:outline-none  justify-start flex">
                EXPLORAR LIBROS
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src={bookSvg}
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
