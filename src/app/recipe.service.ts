import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes = [
    { name: 'Pasta', category: 'Italian', description: 'A delicious pasta recipe.' },
    { name: 'Sushi', category: 'Japanese', description: 'A tasty sushi roll.' }
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }
}
