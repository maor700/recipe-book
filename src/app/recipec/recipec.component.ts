 import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "./recipe";
 import {RecipesService} from "./recipes.service";

@Component({
  selector: 'rb-recipec',
  templateUrl: './recipec.component.html',
  styleUrls: ['./recipec.component.css']
})
export class RecipecComponent implements OnInit {
  selectedRecipe: Recipe = null;
  recipeIndex: Number = null;
  public recipes: Recipe[];
  constructor(private RecipesService:RecipesService) {
    this.recipes = this.RecipesService.getRecipes();
  }

  ngOnInit() {
  }

}
