import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  recipes:Recipe[]=[
    {
    id:1,
    name:"Spaghetti Carbonara",
    ingredients:"spaghetti, bacon, eggs, parmesan cheese, black pepper",
    prepTime:"10 minutes",
    cookTime:"15 minutes",
    category:"Italian"
  },
  {
    id:2,
    name:"Chicken Tikka Masala",
    ingredients:"chicken breast, yogurt, garam masala, turmeric, ginger, garlic, tomato puree, cream",
    prepTime:"15 minutes",
    cookTime:"25 minutes",
    category:"Indian"
  },
  {
    id:3,
    name:"Guacamole",
    ingredients:"avocado, lime, red onion, jalapeno, tomato, cilantro, salt",
    prepTime:"10 minutes",
    cookTime:"0 minutes",
    category:"Mexican"
  },
  {
    id:4,
    name:"Beef Stroganoff",
    ingredients:"beef sirloin, onion, mushrooms, garlic, beef broth, sour cream, egg noodles",
    prepTime:"15 minutes",
    cookTime:"25 minutes",
    category:"Russian"
  }
];
  
  constructor() { }

  getAllRecipes():Recipe[]{
    return this.recipes;
  }

  updateRecipe(recipe:Recipe){
    let recipeToUpdate=this.recipes.find(x=>x.id==recipe.id);
    recipeToUpdate=recipe;
  }

}
