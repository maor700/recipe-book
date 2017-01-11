import {Routes, RouterModule} from '@angular/router';
import {RecipecComponent} from "./recipec/recipec.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const APP_ROUTS : Routes = [
    { path: 'recipes', component: RecipecComponent },
    { path: 'shopping-list',      component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTS);
