import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('ON INIT');
  }

  ionViewWillEnter() {
    console.log('will enter');
  }
  ionViewDidEnter() {
    console.log('did enter');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }

}
