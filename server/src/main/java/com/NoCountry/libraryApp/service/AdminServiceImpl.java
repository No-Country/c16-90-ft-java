package com.NoCountry.libraryApp.service;


import com.NoCountry.libraryApp.repository.AdminRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements  AdminService{
    private final Logger logger = LoggerFactory.getLogger(BookServiceImpl.class);

    private final AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }

}
