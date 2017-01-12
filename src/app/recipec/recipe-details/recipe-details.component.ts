import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs/Rx';
import {RecipesService} from "../recipes.service";
@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: Number;
  @Input() selectedRecipe: Recipe;
  public routeSubscribe: Subscription;
  private recipes: Recipe[];
  constructor(private RecipesService:RecipesService, private activatedRoute:ActivatedRoute) {
    this.recipes = this.RecipesService.getRecipes();
    this.routeSubscribe = this.activatedRoute.params.subscribe(
      (params:any) => {
        this.recipeId = params['id'];
        this.selectedRecipe = this.recipes[params['id']];
      }
    );
  }
  ngOnInit() {
  }

}
