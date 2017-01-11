import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  recipes: Recipe[] =[];
  @Output() recipeSelected = new EventEmitter<any>();
  public SelectedId: Number = null;

  constructor(private recipesservice:RecipesService) {
    this.recipes = this.recipesservice.getRecipes();
  }

  onSelected(recipe: Recipe, recipeId:Number){
    this.SelectedId = recipeId;
    this.recipeSelected.emit(recipe);
  }


}
