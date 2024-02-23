import React from "react";
import bookSvg from "/books.svg";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
            Sumérgete en el fascinante mundo de la literatura.
          </h1>
          <p class="mb-8 leading-relaxed text-xl">
            Explora sin límites, descubre nuevas historias y comparte tus
            experiencias literarias. Desde clásicos atemporales hasta las
            últimas novedades, nuestra plataforma te conecta con recomendaciones
            personalizadas. Haz que cada página cuente y únete a nuestra
            comunidad de amantes de la lectura. Descarga ahora y comienza tu
            viaje en el apasionante universo de las palabras. ¡Lee, califica,
            comparte y vive la magia de los libros con nosotros!
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={bookSvg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
