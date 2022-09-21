package org.launchcode.liftoff.recipeApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Favorites {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    @Size(min=3, max=15)
    private String title;

    @NotNull
    @Size(min=3, max=15)
    private String image;

    @NotNull
    @Size(min=3, max=15)
    private String readyInMinutes;

    @NotNull
    @Size(min=3, max=15)
    private String servings;

    @NotNull
    @Size(min=3, max=15)
    private String sourceName;

    @NotNull
    @Size(min=3, max=15)
    private String sourceUrl;

    @NotNull
    @Size(min=3, max=15)
    private String aggregateLikes;

    @NotNull
    @Size(min=3, max=15)
    private String instructions;

    @NotNull
    @Size(min=3, max=15)
    private String ingredients;

    @ManyToOne
    private Users user;

    public Favorites() {}

    public Favorites(String title, String image, String readyInMinutes, String servings, String sourceName, String sourceUrl, String aggregateLikes, String instructions, String ingredients, Users user) {
        this.title = title;
        this.image = image;
        this.readyInMinutes = readyInMinutes;
        this.servings = servings;
        this.sourceName = sourceName;
        this.sourceUrl = sourceUrl;
        this.aggregateLikes = aggregateLikes;
        this.instructions = instructions;
        this.ingredients = ingredients;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getReadyInMinutes() {
        return readyInMinutes;
    }

    public void setReadyInMinutes(String readyInMinutes) {
        this.readyInMinutes = readyInMinutes;
    }

    public String getServings() {
        return servings;
    }

    public void setServings(String servings) {
        this.servings = servings;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    public String getAggregateLikes() {
        return aggregateLikes;
    }

    public void setAggregateLikes(String aggregateLikes) {
        this.aggregateLikes = aggregateLikes;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}