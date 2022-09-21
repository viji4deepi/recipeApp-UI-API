package org.launchcode.liftoff.recipeApp.services;

import org.launchcode.liftoff.recipeApp.models.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UsersService {

    List<Users> findAll();

    Users findById(int id);

    Users findByUsername(String username);

    void save(Users user);

    void delete(int id);
}