import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  imports: [FormsModule]
})
export class AddRecipeComponent {
  name = '';
  category = '';
  description = '';

  constructor(private recipeService: RecipeService) {}

  addRecipe() {
    if (this.name && this.category && this.description) {
      this.recipeService.addRecipe({ name: this.name, category: this.category, description: this.description });
      alert('Recipe added!');
    } else {
      alert('Please fill in all fields.');
    }
  }
}
