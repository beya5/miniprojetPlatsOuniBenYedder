import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Food } from '../../models/Food';
import { var_food } from '../../../variety';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FoodPageComponent {
  var_food=var_food;

}
