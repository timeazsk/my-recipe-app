import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe-service.service';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//we will inject the http service here
export class DataStorageService {

  constructor(private http : HttpClient, private recipesService: RecipeService) { }

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://ng-recipe-book-d6c78.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://ng-recipe-book-d6c78.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      });
    }),
    tap(recipes => {
      this.recipesService.setRecipes(recipes);
    })
    );
  

  }
}
