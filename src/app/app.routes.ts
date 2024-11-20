import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'tag/:tag1',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path: 'home/:searchTerm', component: HomeComponent },
    {path:'search/searchTerm',component:HomeComponent},
    {path:'food/:id',component:FoodpageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
