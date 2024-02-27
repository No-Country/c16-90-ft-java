package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Book;

import java.util.List;
import java.util.Optional;

/**
 * Interfaz que define un servicio para gestionar libros.
 */
public interface BookService {

    /**
     * Encuentra todos los libros disponibles.
     *
     * @return una lista de todos los libros.
     */
    List<Book> findAllBooks();

    Optional<Book> findBookByID(long id);

    List<Book> findBooksByAuthor(String author);

    List<Book> findBooksByRating(Float rating);

    List<Book> findBooksByBookGenre(String genre);

    Book saveBook(Book book);

    Book updateBook(Book book);

    void deleteBookById(long id);


}


