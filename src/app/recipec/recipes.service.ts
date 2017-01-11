import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipesService {
  public recipesList: Recipe[] = [
    new Recipe('Lorem Ipsum Taest', 'hgy ii og kug iyytf ig iytvit  i7t i i76r tr t', 'http://cdn.eat-vegan.rocks/2015/11/Spinatsuppe-mit-gebratenem-Tofu-Spinach-Soup-with-Roasted-Tofu-760x570.jpg',[]),
    new Recipe('Italian Pizza', 'ste gjkhl x sarg tuil  yki dfh rtj j', 'http://i.imgur.com/0PzvezB.jpg',[]),
    new Recipe('Breakfast', 'ardeg ty tyio sty 5i wtry 35656y 578i', 'http://i.ndtvimg.com/i/2016-03/caprese-salad-625_625x350_81459344578.jpg',[])
  ];
  constructor() {
  }

  getRecipes(): Recipe[]{
    return this.recipesList;
  }

}
