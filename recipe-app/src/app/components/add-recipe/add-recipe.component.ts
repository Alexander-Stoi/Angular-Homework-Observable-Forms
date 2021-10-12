import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {

    this.initRecipeForm();
   
  }

  initRecipeForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      ingredients: new FormControl(null, Validators.required)
    })
  }

  onReactiveFormSubmit() {
    console.log(`VALUES`, this.recipeForm);
    console.log(this.recipeForm.value);
    this.recipeService.addRecipe(this.recipeForm.value)
  }
  
}
