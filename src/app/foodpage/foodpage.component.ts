import { Component, inject, OnInit } from '@angular/core';
import { Food } from '../models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { TagsComponent } from "../components/tags/tags.component";
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [TagsComponent, CurrencyPipe, NgIf],
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Food;

  foodservice: FoodService = inject(FoodService);
  activatedroute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = Number(this.activatedroute.snapshot.params['id']);
    console.log('ID reçu :', id);
    this.foodservice.getFoodById(id).subscribe(
       (data) => {
        if(data){
        console.log('Food data:', data);
        this.food = data;}
       },
       (error) => {
        console.error('Error fetching food data:', error);
      
    });
    
  }
}
