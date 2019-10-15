import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe-service.service';

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
    this.http.get('https://ng-recipe-book-d6c78.firebaseio.com/recipes.json');

  }
}