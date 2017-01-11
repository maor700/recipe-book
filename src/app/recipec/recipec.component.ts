import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'rb-recipec',
  templateUrl: './recipec.component.html',
  styleUrls: ['./recipec.component.css']
})
export class RecipecComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private RecipesService:RecipesService) {
  }

  ngOnInit() {
  }

}
