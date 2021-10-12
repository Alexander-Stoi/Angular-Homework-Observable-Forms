import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(private recipeService: RecipeServiceService) { }

  recipesToShow: Recipe[];

  ngOnInit(): void {

    this.recipeService.recipeSubject.subscribe((data: Recipe[]) => {
      this.recipesToShow = data;
    })
  }

  // showObservableRecipes = () => {
  //   all = this.recipeService.recipes
  //   console.log(`PROBAAAA`, this.recipeService.recipes);

  // }
}
