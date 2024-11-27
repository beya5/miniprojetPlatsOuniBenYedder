import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../models/Food';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../search/search.component';
import { Tag } from '../../models/Tag';
<<<<<<< HEAD

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, SearchComponent],
=======
import { NgIf } from '@angular/common';
import { CooktimePipe } from "../../cooktime.pipe";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, SearchComponent, NgIf, CooktimePipe],

>>>>>>> 8426a10fbaa9c2ab15285c74130bbedbdc5fa1bb
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  activatedroute: ActivatedRoute = inject(ActivatedRoute);
  foods: Food[] = []; 
  search: string = ''; 
  tag: string = ''; 
  private readonly foodService: FoodService = inject(FoodService);
  tags: Tag[] = []; 

  ngOnInit(): void {
    // Écoute des paramètres de la route
    this.activatedroute.params.subscribe(params => {
      this.search = params['searchTerm'] 
      this.tag = params['tag'] ; 

      if (this.search) {
        // Recherche par nom
        this.foodService.getAll().subscribe(data =>
          this.foods = data.filter(food => 
            food.name.toLowerCase().includes(this.search.toLowerCase())
          )
        );
      } else if (this.tag) {
        // Filtrage par tag
        this.foodService.getAll().subscribe(data =>
          this.foods = data.filter(food => 
            food.tags?.some(tag => tag.toLowerCase() === this.tag.toLowerCase())
          )
        );
      } else {
        // Pas de filtre, récupérer tous les aliments
        this.foodService.getAll().subscribe(data => this.foods = data);
      }
    });

    // Charger les tags disponibles
    this.foodService.getTags().subscribe(data => {
      this.tags = data;
      console.log(data)
    });
  }
}
