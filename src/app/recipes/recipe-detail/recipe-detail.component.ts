import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
     recipe: Recipe;

  
  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToSL(){
    this.recipe.ingredients.forEach(ingredient => {
      this.slService.addNewIngredient(ingredient);
    })
  }
  
}
