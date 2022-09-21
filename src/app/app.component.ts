import { Component, Input } from '@angular/core';
import { RecipeService } from './service/recipe.service';
import { SharingService } from './service/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  ) {}
}
