import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/Tag';
import { FoodService } from '../../services/food.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags:Tag[]=[];
  constructor(private foodService:FoodService){}
  ngOnInit(): void {
    this.tags=this.foodService.getAllTags();
  }

}
