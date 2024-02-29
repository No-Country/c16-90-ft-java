package com.NoCountry.libraryApp.rest;

import com.NoCountry.libraryApp.entity.Admin;
import com.NoCountry.libraryApp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerAdmin(@RequestBody Admin admin){
        if(!isValidAdmin(admin)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error en la solicitud de registro de admin");
        }

        if(registersuccess(admin)){
            return ResponseEntity.ok("Registro de admin exitoso");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error en el registro del admin");
        }
    }

    private boolean isValidAdmin(Admin admin){
        return admin!= null;
    }

    private boolean registersuccess(Admin admin){
        return true;
    }

}
