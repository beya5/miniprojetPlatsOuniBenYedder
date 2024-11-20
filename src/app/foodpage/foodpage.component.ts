import { Component, inject,OnInit } from '@angular/core';
import { Food } from '../models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { TagsComponent } from "../components/tags/tags.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [TagsComponent,CurrencyPipe],
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']

})
export class FoodpageComponent {
food!:Food;
foodservice:FoodService=inject(FoodService);
activatedroute:ActivatedRoute=inject(ActivatedRoute);
ngOnInit() {
   this.foodservice.getFoodById(Number(this.activatedroute.snapshot.params['id'])).subscribe(data=>this.food=data);
}

}
