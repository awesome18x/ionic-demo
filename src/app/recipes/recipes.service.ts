import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Kha Banh',
      imageURL: 'https://vnn-imgs-f.vgcloud.vn/2020/02/11/12/ngoc-trinh-dien-bikini-sexy-so-2-thi-khong-ai-so-1-8.jpg',
      ingredients: ['Chelsea', 'Barcelona', 'Bayern']
    },
    {
      id: 2,
      title: 'Ngoc Trinh',
      imageURL: 'https://vnn-imgs-f.vgcloud.vn/2020/02/11/12/ngoc-trinh-dien-bikini-sexy-so-2-thi-khong-ai-so-1-8.jpg',
      ingredients: ['Chelsea', 'Arsenal', 'Liverpool']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: number) {
    return {
      ...this.recipes.find(recipe => {
        // tslint:disable-next-line: semicolon
        return recipe.id === recipeId
      })
    };
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => {
      // tslint:disable-next-line: semicolon
      return recipe.id !== recipeId
    });
  }
}
