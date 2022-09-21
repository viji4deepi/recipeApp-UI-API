package org.launchcode.liftoff.recipeApp.repositories;

import org.launchcode.liftoff.recipeApp.models.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UsersRepository extends CrudRepository<Users, Integer> {

    Users findByUsername(String username);
}