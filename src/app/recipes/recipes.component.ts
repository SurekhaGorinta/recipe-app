import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  imports: [CommonModule]
})
export class RecipesComponent {
  recipes: any[];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }
}
