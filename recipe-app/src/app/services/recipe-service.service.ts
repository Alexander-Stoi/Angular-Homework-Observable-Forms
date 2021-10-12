import { Injectable } from '@angular/core';
import { BehaviorSubject, ObjectUnsubscribedError, Subject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import * as uuid from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  uuidValue: string

  recipeSubject = new BehaviorSubject<Recipe[]>([])
  $recipeSubject = this.recipeSubject.asObservable();

  recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    const newRecipe = {
      id: uuid.v4(),
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.ingredients
    }

    this.recipes.push(newRecipe);
    this.recipeSubject.next(this.recipes)
  }

}