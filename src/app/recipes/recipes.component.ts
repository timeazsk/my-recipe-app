import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './recipe-service.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService){}

  ngOnInit(){

  }
  



}
