package org.launchcode.liftoff.recipeApp.repositories;

import org.launchcode.liftoff.recipeApp.models.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IngredientsRepository extends JpaRepository<Ingredients, Integer> {
}