import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Banana smoothie', 'A healthy and tasty smoothie', 'https://fitfoodiefinds.com/wp-content/uploads/2019/03/banana-smoothie-sq.jpg'),
    new Recipe('Apple pie', 'A finger-licking sugar-filled pie', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onReceiveClickRecipeEvent(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

}
