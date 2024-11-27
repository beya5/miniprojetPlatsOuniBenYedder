import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../../../../../src/app/services/food.service';
import { Food } from '../../../../../src/app/models/Food';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CooktimePipe } from "../../../../../src/app/cooktime.pipe";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf, FormsModule, CooktimePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private readonly foodService: FoodService = inject(FoodService);
  private readonly router = inject(Router);

  food!: Food[];
  selectedFood!: Food | null;
  isAddingFood = false;

  // Variables pour stocker les propriétés de l'aliment à ajouter
  name: string = '';
  price: number = 0;
  imageUrl: string = '';
  origins: string = '';
  cooktime: string = '';
  favorite: boolean = false;
  tags: string = ''; // Pour stocker les tags sous forme de chaîne

  ngOnInit(): void {
    this.foodService.getAll().subscribe((data) => (this.food = data));
  }

  editFood(food: Food): void {
    this.selectedFood = { ...food }; // Copie pour éviter de modifier directement la liste
  }

  cancelEdit(): void {
    this.selectedFood = null;
  }

  updateFood(): void {
    if (this.selectedFood) {
      this.foodService.updateFood(this.selectedFood).subscribe(() => {
        this.food = this.food.map((item) =>
          item.id ===this.selectedFood?.id ? this.selectedFood! : item
        );
        this.selectedFood = null; 
      });
    }
  }

  deleteFood(id: string): void {
    this.foodService.deleteFood(id).subscribe(() => {
      this.food = this.food.filter((item) => item.id !== id);
    });
  }

  showAddFoodForm(): void {
    this.isAddingFood = true; 
    this.resetForm();
  }

  addFood(): void {
    const newId = (Math.floor(Math.random() * (100 - 12 + 1)) + 12).toString();


    // Créer une nouvelle instance de Food
    const newFood = new Food(
      newId,
      this.name,
      this.price,
      this.tags.split(',').map((tag) => tag.trim()), // Convertir les tags en tableau
      this.favorite,
      0, // Valeur par défaut pour stars
      this.imageUrl,
      [this.origins], // Origines converties en tableau
      this.cooktime
    );

    // Ajouter le nouvel aliment via l'API
    this.foodService.addFood(newFood).subscribe((addedFood) => {
      this.food.push(addedFood); // Ajouter à la liste locale
      this.isAddingFood = false; // Fermer le formulaire
      this.resetForm(); // Réinitialiser les champs du formulaire
    });
  }

  resetForm(): void {
    // Réinitialiser toutes les variables
    this.name = '';
    this.price = 0;
    this.imageUrl = '';
    this.origins = '';
    this.cooktime = '';
    this.favorite = false;
    this.tags = '';
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
