import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { SharingService } from '../service/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {


  ngOnInit(): void {
  }

  results:any = [];
  constructor(
    private recipeService: RecipeService,
    private sharingService: SharingService, 
    private router: Router
  ) {}

  searchTerm : any;

  addNewItem() {
    this.results = this.recipeService.get(this.searchTerm).subscribe((res:any)=>{
      this.results = res;
    });
  }

  compare(recipe: any){
    console.log(recipe);
    this.sharingService.sharingValue = recipe;
    this.router.navigate(['/compare'])
  }

}
