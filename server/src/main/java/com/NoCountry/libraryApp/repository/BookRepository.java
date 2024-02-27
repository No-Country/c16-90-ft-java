package com.NoCountry.libraryApp.repository;

import com.NoCountry.libraryApp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interfaz de repositorio para gestionar los libros en la base de datos.
 */
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {


    @Query("SELECT b FROM Book b WHERE b.author = :author")
    List<Book> findBooksByAuthor(String author);

    @Query("SELECT b FROM Book b WHERE b.genre LIKE %:genre%")
    List<Book> findBooksByBookGenre(String genre);

    @Query("SELECT b FROM Book b WHERE b.rating LIKE %:rating%")
    List<Book> findBooksByRating(Float rating);

}
