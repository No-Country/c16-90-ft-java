package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.User;

import java.util.List;

/**
 * Interfaz que define un servicio para gestionar libros.
 */

public interface UserService {


    /**
     * Encuentra todos los usuarios registrados.
     *
     * @return una lista de todos los libro.
     */
    List<User> findAllUsers();




}
