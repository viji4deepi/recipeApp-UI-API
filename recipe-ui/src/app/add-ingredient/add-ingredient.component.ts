import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientService } from '../service/ingredients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  addForm: FormGroup;

  constructor( private fb: FormBuilder, private ingredientService : IngredientService, private router : Router) { 
    this.addForm = this.fb.group({
      'name': ['', Validators.required],
      'quantity': ['', Validators.required] 
    });
  }

  ngOnInit(): void {
  }

  addNewIngredient(){
    this.ingredientService.add(this.addForm.value).subscribe((res: any)=> {
      this.router.navigate(['/ingredients'])
    }) 
  }

  


}
