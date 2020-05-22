import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activateRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId =  Number(paramMap.get('recipeId'));
      this.loadedRecipe =  this.recipesService.getRecipe(recipeId);
    });
  }


  onDeleteRecipe(id: number) {
    this.alertControl.create({
      header: 'Are you sure?',
      message: 'Do you readly want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
