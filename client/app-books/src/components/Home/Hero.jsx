import React from "react";
import bookSvg from "/books.svg";

const Hero = () => {
  return (
    <header class="bg-white ">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold text-gray-800  lg:text-4xl text-start">
                Mejor lugar para descubrir <br /> tus{" "}
                <span class="text-[#F3B331]">nuevas historias</span>
              </h1>

              <p class="mt-3 text-gray-600 text-start">
                Encuentra las mejores obras literarias que te transportarán a
                lugares inimaginables.
              </p>

              <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#F3B331] rounded-lg lg:w-auto focus:outline-none  justify-start flex">
                EXPLORAR LIBROS
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full max-w-md"
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
