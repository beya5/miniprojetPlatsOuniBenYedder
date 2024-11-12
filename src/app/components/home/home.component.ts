import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/Food';
import { NgxStarRatingModule } from "ngx-star-rating";
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute,RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxStarRatingModule, CurrencyPipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit{
// onRate($event: Event) {
// }
ratingValue: number = 4;
foods:Food[]=[];
  constructor(private foodService:FoodService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.foods=this.foodService.getAll();
    this.route.params.subscribe(param=>{
      if(param['tag1'])
        this.foods=this.foodService.getAllFoodByTag(param['tag1']);
    })
}
}
