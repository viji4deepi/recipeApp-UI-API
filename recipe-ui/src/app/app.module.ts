import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipeService } from './service/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { CompareComponent } from './compare/compare.component';
import {SharingService} from './service/sharing.service';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    CompareComponent,
    SearchRecipeComponent,
    AddIngredientComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService,SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
