package com.NoCountry.libraryApp.repository;

import com.NoCountry.libraryApp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interfaz de repositorio para gestionar los libros en la base de datos.
 */
@Repository
public interface BookRepository  extends JpaRepository<Book, Long>  {



}
