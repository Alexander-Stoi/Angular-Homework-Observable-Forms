# Angular-Homework-Observable-Forms

Objective of the homework is to create recipe app :).

1. Create 3 components: Home, add-recipe and all-recipes.
2. Implement routing to each of the components. 
3. In the component add-recipe implement a form, where we will create the recipe. 
4. The Recipe interface/type should have { id: number | string, name: string, description: string, ingredients: string[]}, feel free to add more.
5. These recipes created, we should store them in an Subject (as we learned today) and this Subject should be in a service ;). ( I know you guessed that )
6. The all-recipes component should subscribe to the observable created of the Subject previously :).
** A little hint, the type this Subject might be Recipe[] ( array of recipes ;) ) 

Bonus: Implement delete and edit buttons and functionality for the recipes :). ** Like the recipe card when printed should have thees 2 buttons :) 