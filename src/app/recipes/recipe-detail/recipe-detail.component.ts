import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
     recipe: Recipe;
     id:number;

  
  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToSL(){
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.slService.addNewIngredient(ingredient);
    // })

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  deleteRecipe(){
    this.recipeService.removeRecipe(this.id);
    this.router.navigate(['/recipes']);
  }



}
