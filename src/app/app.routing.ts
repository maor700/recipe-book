import {Routes, RouterModule} from '@angular/router';
import {RecipecComponent} from "./recipec/recipec.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipec/recipes.routes";

const APP_ROUTS : Routes = [
    { path: '', redirectTo:'/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipecComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list',      component: ShoppingListComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTS);
