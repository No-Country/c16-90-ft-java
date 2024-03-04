package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Book;
import com.NoCountry.libraryApp.entity.Comment;
import com.NoCountry.libraryApp.repository.BookRepository;
import com.NoCountry.libraryApp.repository.CommentRepository;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{
    public final Logger logger = LoggerFactory.getLogger(CommentServiceImpl.class);
    public final CommentRepository commentRepository;
    private final BookRepository bookRepository;


    public CommentServiceImpl(CommentRepository commentRepository, BookRepository bookRepository) {
        this.commentRepository = commentRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    public Comment createComment(String commentText, Long bookId) {
        Comment comment = new Comment();
        comment.setComment(commentText);
        // Busca el libro por su ID en la base de datos
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            // Si se encuentra el libro, establece la relación con el comentario
            comment.setBook(optionalBook.get());
        } else {
            // Manejo de error si el libro no se encuentra
            throw new IllegalArgumentException("Libro no encontrado con ID: " + bookId);
        }

        // Guarda el comentario en la base de datos
        return commentRepository.save(comment);
    }


    @Override
    public List<Comment> getCommentsByBookId(Long bookId) {
        try {
            return commentRepository.findCommentsByBook(bookRepository.findById(bookId).orElse(null));
        }catch (DataAccessException | HibernateException e) {
            e.printStackTrace();
            logger.error("Error occurred while fetching comments for book with ID: " + bookId, e);
            return Collections.emptyList();
        }
    }

}


