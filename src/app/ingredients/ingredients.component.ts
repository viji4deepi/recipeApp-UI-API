import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from '../service/ingredients.service';

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
  deleteIngredients(){
    this.ingredientService.delete(this.addForm.value)
    .subscribe(res =>{
      alert('employee data deleted');
      this.getIngredients();
    })
  }

}
