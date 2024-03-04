package com.NoCountry.libraryApp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


/**
 * Clase que representa un libro.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private long id;

    @NotNull
    @NotBlank
    private String title;

    @NotNull
    @NotBlank
    private String author;

    @Column(length = 65535, columnDefinition = "TEXT")
    private String descriptions;

    @Pattern(regexp = "^(https?|ftp)://\\S+$", message = "La URL de la imagen no es válida")
    private String imageUrl;

    @Min(value = 1, message = "El numero de paginas debe ser mayor que 0")
    private Integer numPages;

    @NotNull
    @Column(name = "rating")
    private String rating;

    @Column(name = "book_genre")
    private String genre;

    @OneToMany(mappedBy = "book")
    private List<Comment> comments;

}




