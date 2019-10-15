import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list-service.service';

@Injectable()
export class RecipeService {

   recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
       new Recipe(
           'A Test Recipe',
           'Test Description', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('Fries', 20)
          ] ),
    new Recipe(
        'Another Test Recipe', 
        'Another Test Description', 
        'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
        [
            new Ingredient('Bread', 2),
            new Ingredient('Meat', 2)
        ])
    ];

    constructor(private slService: ShoppingListService ){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    removeRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    
}
