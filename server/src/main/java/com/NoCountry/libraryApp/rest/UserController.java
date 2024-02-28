package com.NoCountry.libraryApp.rest;

import com.NoCountry.libraryApp.entity.User;
import com.NoCountry.libraryApp.service.UserServiceIpml;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/users")

public class UserController {

    private final UserServiceIpml userService;

    @Autowired
    public UserController(UserServiceIpml userService) {
        this.userService = userService;
    }



        @GetMapping("/all")
        public ResponseEntity<List<User>> getAllUsers(){
            try{
                List<User> users = userService.findAllUsers();
                return new ResponseEntity<>(users, HttpStatus.OK);
            }catch (Exception e){
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

            }
        }




}
