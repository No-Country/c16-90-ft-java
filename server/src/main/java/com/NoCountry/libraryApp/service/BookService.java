package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Book;
import java.util.List;

/**
 * Interfaz que define un servicio para gestionar libros.
 */
public interface BookService {

    // TODO: Agregar método en BookService para buscar libros por autor.
    // TODO: Agregar método en BookService para buscar libros por rating.
    // TODO: Agregar método en BookService para obtener todos los libros ordenados por título.
    // TODO: Agregar método en BookService para obtener el libro con el rating más alto.
    // TODO: Agregar método en BookService para obtener el libro con el rating más bajo.
    // TODO: Agregar método en BookService para guardar un nuevo libro en la base de datos.
    // TODO: Agregar método en BookService para actualizar la información de un libro existente en la base de datos.
    // TODO: Agregar método en BookService para eliminar un libro de la base de datos por su ID.

    /**
     * Encuentra todos los libros disponibles.
     *
     * @return una lista de todos los libros.
     */
    List<Book> findAllBooks();


}


