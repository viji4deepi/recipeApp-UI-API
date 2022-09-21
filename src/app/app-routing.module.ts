import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { CompareComponent } from './compare/compare.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LoginComponent } from './login/login.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path:'',component:SearchRecipeComponent
},
  {
    path: 'compare',component: CompareComponent
  },
  {
    path: 'ingredients',component: IngredientsComponent
  },
  {
    path: 'ingredients/add',component: AddIngredientComponent
  },
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'signup',component: SignupComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
