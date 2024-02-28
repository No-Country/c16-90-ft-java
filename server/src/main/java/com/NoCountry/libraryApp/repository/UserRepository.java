package com.NoCountry.libraryApp.repository;

import com.NoCountry.libraryApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Interfaz de repositorio para gestionar los usuarios en la base de datos.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
