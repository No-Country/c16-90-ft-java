package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.Comment;
import com.NoCountry.libraryApp.repository.BookRepository;
import com.NoCountry.libraryApp.repository.CommentRepository;

import java.util.List;

public interface CommentService{


    Comment createComment(String commentText, Long bookId);

    List<Comment> getCommentsByBookId(Long bookId);
}
