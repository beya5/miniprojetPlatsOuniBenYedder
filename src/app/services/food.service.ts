import { inject, Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { Tag } from '../models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
const API_f="http://localhost:3000/food"
const API_t="http://localhost:3001/tags"
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private readonly http:HttpClient=inject(HttpClient);
  constructor() { }
  getFoodById(id: number): Observable<Food> {
    return this.getAll().pipe(
      map(data => data.find(food => food.id == id)!)
    );
  }
  

  public getAll(): Observable<Food[]> {
    return this.http.get<  Food[] >(API_f);
  }
  getAllFoodByTag(tag: string): Observable<Food[]> {
    return this.getAll().pipe(
      map(data => {
        if (tag == "All") {
          return data; // Si le tag est "All" renvoyer tous les plats
        } else {
          return data.filter(food => food.tags?.includes(tag)); // Filtrer par tag
        }
      })
    );
  }
  
  public getTags(): Observable<Tag[]> {
    return this.http.get<{ tags: Tag[] }>(API_t).pipe(
      map(response => response.tags)
    );
  }
  
  public updateFood(food: Food): Observable<Food> {
    return this.http.put<Food>(`${API_f}/${food.id}`, food);
  }

  public deleteFood(id: number): Observable<void> {
    return this.http.delete<void>(`${API_f}/${id}`);
  }

}