package com.NoCountry.libraryApp.repository;

import com.NoCountry.libraryApp.entity.Book;
import com.NoCountry.libraryApp.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.book.id = :bookId")
    List<Comment> getCommentsByBookId(@Param("bookId") Long bookId);
    List<Comment> findCommentsByBook(Book book);
}
