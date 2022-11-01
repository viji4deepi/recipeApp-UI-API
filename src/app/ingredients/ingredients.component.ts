import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from '../service/ingredients.service';
import { IngredientsModel } from '../add-ingredient/ingredients.model'; 

export class MyIngredient{
  constructor(public id: number,
    public name: string,
    public quantity: number){

    }
}
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit{

  addForm: FormGroup;
  showAdd!: boolean;
  showUpdate!:boolean; 
  ingredientsModelObj : IngredientsModel = new IngredientsModel();
  ingredientsToUpdate = {
    id : "",
    name: "",
    quantity : ""
  }
 
  myingredients: MyIngredient[] = [];
  constructor( 
    private httpClient : HttpClient,
    private router : Router,
    private ingredientService :IngredientService,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      'name': ['', Validators.required],
      'quantity': ['', Validators.required] 
    });
   }

   ngOnInit(): void {
    this.getIngredients();
  }

   getIngredients(){
     this.ingredientService.get().subscribe(
      response => {
        console.log(response);
        this.myingredients = response;
      }
     )}   
  
  addIngredients(){
    this.router.navigate(['/ingredients/add'])
  }
  deleteIngredients(ingredient : any){
    this.ingredientService.delete(ingredient.id)
    .subscribe(res =>{
      alert('ingredients deleted');
      this.getIngredients();
      console.log(res);
    })
  }
  editIngredients( ingredient : any){
   
    
    this.ingredientsToUpdate.id = ingredient.id;
    this.ingredientsToUpdate.name = ingredient.name;
    this.ingredientsToUpdate.quantity = ingredient.quantity;

    
  }
  updateIngredients(){
    this.ingredientService.update(this.ingredientsToUpdate)
    .subscribe(res =>{
      alert('update sucess');
      let ref = document.getElementById('cancel');
    ref?.click();
    this.addForm.reset();
    this.getIngredients();
    })
  }

}
