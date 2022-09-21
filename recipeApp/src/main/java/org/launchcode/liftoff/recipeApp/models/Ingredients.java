package org.launchcode.liftoff.recipeApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Ingredients {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    @Column(name = "ingredient")
    @Size(min=3, max=15)
    private String name;

    @ManyToOne
    private Users user;

    @NotNull
    private int quantity;

    public Ingredients() {}

    public Ingredients(String name, Users user,Integer quantity) {
        this.name = name;
        this.user = user;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}