import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipecComponent } from './recipec/recipec.component';
import { RecipeListComponent } from './recipec/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipec/recipe-list/recipe-item.component';
import { RecipeDetailsComponent } from './recipec/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SelectionItemDirective } from './ui-directives/selection-item.directive';
import {RecipesService} from "./recipec/recipes.service";
import {routing} from "./app.routing";
import { RecipeStartComponent } from './recipec/recipe-start.component';
import { RecipeEditComponent } from './recipec/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipecComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    SelectionItemDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
