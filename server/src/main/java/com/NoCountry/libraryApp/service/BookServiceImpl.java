package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Book;
import com.NoCountry.libraryApp.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementación del servicio para gestionar libros.
 */

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    /**
     * Constructor para la clase BookServiceImpl.
     *
     * @param bookRepository Repositorio de libros utilizado para acceder a los datos de los libros.
     */
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    /**
     * Encuentra todos los libros disponibles.
     *
     * @return una lista de todos los libros.
     */
    @Override
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }
}
