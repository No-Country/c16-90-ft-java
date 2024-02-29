package com.NoCountry.libraryApp.service;

import com.NoCountry.libraryApp.entity.User;
import com.NoCountry.libraryApp.repository.UserRepository;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;


@Service
public class UserServiceIpml implements UserService {

    public final Logger logger = LoggerFactory.getLogger(UserServiceIpml.class);
    public final UserRepository userRepository;

    public UserServiceIpml(UserRepository userRepository){this.userRepository = userRepository;}

    /**
     * Encuentra todos los usuario disponibles.
     *
     * @return una lista de todos los Usuarios.
     */
    @Override
    public List<User> findAllUsers(){
        try{
            return userRepository.findAll();
        }catch (DataAccessException | HibernateException e){
            logger.error("Error occurred while fetching all users", e);
            return Collections.emptyList();
        }
    }

}
