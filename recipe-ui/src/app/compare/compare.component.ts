import { Component, OnInit } from '@angular/core';
import {SharingService} from '../service/sharing.service';
import { IngredientService } from '../service/ingredients.service';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  recipe: any;
  ingredients: any = [];

  constructor(private sharingService: SharingService,
    private ingredientService :IngredientService) {}

  ngOnInit(): void {
    this.recipe = this.sharingService.sharingValue;
    this.getIngredients();

  }

  getIngredients(){
    this.ingredientService.get().subscribe(
     response => {
       this.ingredients = response;
     });
 }  

}
