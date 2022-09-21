package org.launchcode.liftoff.recipeApp.services;

import org.launchcode.liftoff.recipeApp.models.Favorites;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FavoritesService {

    List<Favorites> findAll();

    Favorites findById(int id);

    void save(Favorites favorite);

    void delete(int id);
}