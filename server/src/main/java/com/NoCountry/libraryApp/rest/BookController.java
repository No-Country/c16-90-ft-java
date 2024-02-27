package com.NoCountry.libraryApp.rest;

import com.NoCountry.libraryApp.entity.Book;
import com.NoCountry.libraryApp.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookServiceImpl bookService;

    @Autowired
    public BookController(BookServiceImpl bookService) {
        this.bookService = bookService;
    }

    /**
     * Maneja las solicitudes GET para obtener la lista de todos los libros.
     *
     * @return ResponseEntity con la lista de libros y un código de estado HTTP.
     * - Si la operación es exitosa, devuelve un ResponseEntity con la lista de libros y un código de estado 200 (OK).
     * - En caso de error, devuelve un ResponseEntity con un código de estado 500 (Internal Server Error).
     */
    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = bookService.findAllBooks();
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Maneja solicitudes GET para obtener un libro por su ID.
     *
     * @param id ID del libro a buscar.
     * @return ResponseEntity con el libro si se encuentra (código de estado 200), o ResponseEntity con código de estado 404 si no se encuentra.
     * En caso de problemas al acceder a la base de datos, devuelve un ResponseEntity con código de estado 500 (Internal Server Error).
     */
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable long id) {
        try {
            return bookService.findBookByID(id)
                    .map(book -> new ResponseEntity<>(book, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (DataAccessException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtiene una lista de libros por el nombre del autor.
     *
     * @param theAuthor El nombre del autor para buscar libros.
     * @return ResponseEntity con la lista de libros del autor o una lista vacía si no se encuentran.
     */
    @GetMapping("author/{theAuthor}")
    public ResponseEntity<List<Book>> getBookByAuthor(@PathVariable String theAuthor) {
        try {
            String decodedAuthorName = URLDecoder.decode(theAuthor, StandardCharsets.UTF_8);
            List<Book> books = bookService.findBooksByAuthor(decodedAuthorName);
            return ResponseEntity.ok(books);
        } catch (DataAccessException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    /**
     * Obtiene una lista de libros por rating.
     *
     * @param rating El rating de los libros a buscar.
     * @return ResponseEntity con la lista de libros que tienen el rating especificado.
     *         Si no se encuentran libros, devuelve un ResponseEntity con código de estado 404 (Not Found).
     *         En caso de error, devuelve un ResponseEntity con código de estado 500 (Internal Server Error).
     */
    @GetMapping("rating/{rating}")
    public ResponseEntity<List<Book>> getBooksByRating(@PathVariable float rating) {
        try {
            List<Book> books = bookService.findBooksByRating(rating);

            if (books.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(books);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    /**
     * Obtiene una lista de libros por género.
     *
     * @param genre El género de los libros a buscar.
     * @return ResponseEntity con la lista de libros que pertenecen al género especificado.
     *         Si no se encuentran libros, devuelve un ResponseEntity con código de estado 404 (Not Found).
     *         En caso de error, devuelve un ResponseEntity con código de estado 500 (Internal Server Error).
     */
    @GetMapping("genre/{genre}")
    public ResponseEntity<List<Book>> getBooksByGenre(@PathVariable String genre) {
        try {
            List<Book> books = bookService.findBooksByBookGenre(genre);

            if (books.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(books);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }
}
