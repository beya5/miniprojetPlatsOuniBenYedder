import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../../../../src/app/services/food.service';
import { Food } from '../../../../src/app/models/Food';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private readonly foodService: FoodService = inject(FoodService);
  private readonly router = inject(Router); // Injection du Router
  food!: Food[];
  selectedFood!: Food | null;

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
        // Met à jour la liste locale après modification
        this.food = this.food.map((item) =>
          item.id === this.selectedFood?.id ? this.selectedFood! : item
        );
        this.selectedFood = null; // Réinitialise le formulaire
      });
    }
  }

  deleteFood(id: number): void {
    this.foodService.deleteFood(id).subscribe(() => {
      // Supprime localement après suppression
      this.food = this.food.filter((item) => item.id !== id);
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Exemple de navigation vers "home"
  }
}
