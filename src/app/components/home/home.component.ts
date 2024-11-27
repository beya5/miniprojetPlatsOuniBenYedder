import { Component,CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/Food';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { SearchComponent } from '../../search/search.component';
import { Tag } from '../../models/Tag';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, SearchComponent, NgIf,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit{
activatedroute:ActivatedRoute=inject(ActivatedRoute);
foods!:Food[];
serach!:string;
private readonly foodService:FoodService=inject(FoodService);
tags?: Tag[];

  ngOnInit(): void {
      this.activatedroute.params.subscribe(params => {
        this.serach = params['searchTerm'];
        if (this.serach) {
          this.foodService.getAll().subscribe(data =>
            this.foods = data.filter(food => food.name.toLowerCase().includes(this.serach.toLowerCase()))
          );
        } else {
          this.foodService.getAll().subscribe(data => this.foods = data);
        }
      });
      this.foodService.getTags().subscribe(data => {
        this.tags = data;
      });
    }

   /*   this.route.params.subscribe(param=>{
      if(param['tag1'])
        this.foods=this.foodService.getAllFoodByTag(param['tag1']);
    })
    

}*/
}
