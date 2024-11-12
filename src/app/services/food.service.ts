import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { var_food } from '../../variety';
import { Tag } from '../models/Tag';
import { tag_food } from '../../tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return var_food;     
  }
  getAllFoodByTag(tag:string):Food[]{
    if(tag=="All")
      return this.getAll();
    else 
      return this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAllTags():Tag[]{
    return tag_food;
  }
}