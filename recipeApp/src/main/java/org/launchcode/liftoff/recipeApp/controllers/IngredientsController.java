package org.launchcode.liftoff.recipeApp.controllers;

import org.launchcode.liftoff.recipeApp.models.Ingredients;
import org.launchcode.liftoff.recipeApp.repositories.IngredientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("ingredients")
public class IngredientsController {
    @Autowired
    private IngredientsRepository ingredientsRepository;

    public IngredientsController(IngredientsRepository ingredientsRepository) {
        this.ingredientsRepository = ingredientsRepository;
    }


    @GetMapping
    public List<Ingredients> getIngredients(){

        return ingredientsRepository.findAll();
    }

    @PostMapping
    public ResponseEntity getIngredients(@RequestBody Ingredients newIngredients){
        ingredientsRepository.save(newIngredients);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateIngredients(@RequestBody Ingredients updateIngredients, @PathVariable Integer id){
        try{
            Ingredients ingredientsExist = ingredientsRepository.getReferenceById(id);
            ingredientsExist.setName(updateIngredients.getName());
            ingredientsRepository.save(ingredientsExist);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path="{id}")
    public ResponseEntity deleteIngredients(@PathVariable int id){
        ingredientsRepository.deleteById(id);
        // ingredientsRepository.delete(removeIngredients);
        return ResponseEntity.noContent().build();
    }

   /* @GetMapping("add")
    public String displayAddIngredientsForm(Model model) {
        model.addAttribute(new Ingredients());
        return "ingredients/add";
    }

    @GetMapping("compare")
    public String displayCompareIngredientsForm(Model model) {
        model.addAttribute(new Ingredients());
        return "ingredients/compare";
    }
//    @GetMapping("add")
//    public String displayAddIngredientsForm(Users user){
//        return "ingredients/add";
//    }

    @PostMapping("add")
    public String processAddIngredientsForm(@ModelAttribute @Valid Ingredients newIngredients,
                                            Errors errors, Model model) {

        if (errors.hasErrors()) {
            model.addAttribute("title", "Add Ingredient");
            model.addAttribute("ingredients", ingredientsRepository.findAll());
            return "ingredients/add";
        }

        ingredientsRepository.save(newIngredients);

        return "redirect:";
    }
    
    @GetMapping("view/{addIngredientsId}")
    public String displayViewIngredient(Model model, @PathVariable int addIngredientsId){
        Optional <Ingredients> optionalIngredients = ingredientsRepository.findById(addIngredientsId);
        if(optionalIngredients.isPresent()){
          Ingredients ingredients = (Ingredients) optionalIngredients.get();
          model.addAttribute("ingredients",ingredients);
            return "ingredients/view";
        } else
        {
            return "redirect:../";
        }
    }*/
}
