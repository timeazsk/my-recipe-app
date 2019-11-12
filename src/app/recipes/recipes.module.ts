import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { EmptyRecipeComponent } from './empty-recipe/empty-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        EmptyRecipeComponent,
        RecipeEditComponent
    ],
    imports: [
        RouterModule, //.forChild(*define routes*) if you define your routes here
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
    // exports : [
    //     RecipesComponent, //we are only using these internally; either embedded into other components (declarations) OR by loading them through recipe routing
    //     RecipeListComponent,
    //     RecipeDetailComponent,
    //     RecipeItemComponent,
    //     EmptyRecipeComponent,
    //     RecipeEditComponent
    // ]
})
export class RecipesModule {

}