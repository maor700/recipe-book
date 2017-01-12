import {Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipesService} from "../recipes.service";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] =[];
  @Input() recipeIndex: number = 0;
  @Input() selectedRecipe:Recipe;

  constructor(private recipesService:RecipesService) {

  }

  ngOnInit(){

  }

}
