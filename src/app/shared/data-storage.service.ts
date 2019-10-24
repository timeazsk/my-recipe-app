import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe-service.service';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
//we will inject the http service here
export class DataStorageService {

  constructor(private http : HttpClient, private recipesService: RecipeService, private authService: AuthService) { }

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://ng-recipe-book-d6c78.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes(){
    return this.authService.user.pipe(take(1), 
      exhaustMap(user => {
        return this.http.get<Recipe[]>('https://ng-recipe-book-d6c78.firebaseio.com/recipes.json',
        {
          params: new HttpParams().set('auth', user.token)
        })
      }),
      map(recipes => {
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
