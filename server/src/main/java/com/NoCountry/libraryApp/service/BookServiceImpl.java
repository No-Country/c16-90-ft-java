package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Book;
import com.NoCountry.libraryApp.repository.BookRepository;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Implementación del servicio para gestionar libros.
 */

@Service
public class BookServiceImpl implements BookService {

    private final Logger logger = LoggerFactory.getLogger(BookServiceImpl.class);
    private final BookRepository bookRepository;

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
        try {
            return bookRepository.findAll();
        } catch (DataAccessException | HibernateException e) {
            logger.error("Error occurred while fetching all books.", e);
            return Collections.emptyList();
        }
    }

    /**
     * Encuentra un libro por su ID.
     *
     * @param id el ID del libro a buscar.
     * @return el libro encontrado, o null si no se encuentra.
     */
    @Override
    public Optional<Book> findBookByID(long id) {
        try {
            return bookRepository.findById(id);
        } catch (DataAccessException | HibernateException e) {
            logger.error("Error occurred while fetching the book with ID: " + id, e);
            return Optional.empty();
        }
    }

    /**
     * Encuentra libros por el nombre del autor.
     *
     * @param author el nombre del autor.
     * @return una lista de libros del autor especificado.
     */
    @Override
    public List<Book> findBooksByAuthor(String author) {
        try {
            return bookRepository.findBooksByAuthor(author);
        } catch (DataAccessException | HibernateException e) {
            logger.error("Error occurred while fetching the book with Author: " + author, e);
            return List.of();
        }
    }

    /**
     * Encuentra libros por su rating.
     *
     * @param rating el rating de los libros a buscar.
     * @return una lista de libros con el rating especificado.
     */
    @Override
    public List<Book> findBooksByRating(Float rating) {
        try {
            return bookRepository.findBooksByRating(rating);
        } catch (DataAccessException e) {
            logger.error("Error al buscar libros por rating: {}", rating, e);
            throw new RuntimeException("Error al buscar libros por rating", e);
        }
    }

    /**
     * Busca y devuelve una lista de libros por género.
     *
     * @param genre El género de los libros a buscar.
     * @return Una lista de libros que pertenecen al género especificado.
     * @throws RuntimeException Si ocurre un error al buscar los libros por género.
     */
    @Override
    public List<Book> findBooksByBookGenre(String genre) {
        try {
            return bookRepository.findBooksByBookGenre(genre);
        } catch (DataAccessException e) {
            logger.error("Error al buscar libros por género: {}", genre, e);
            throw new RuntimeException("Error al buscar libros por género", e);
        }
    }

    @Override
    public Book saveBook(Book book) {
        return null;
    }

    @Override
    public Book updateBook(Book book) {
        return null;
    }

    @Override
    public void deleteBookById(long id) {

    }
}

