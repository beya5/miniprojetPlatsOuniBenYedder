import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { FoodpageComponent } from './foodpage/foodpage.component';
=======
import { FoodPageComponent } from './components/food-page/food-page.component';
// import { LoginComponent } from '../../projects/back-office/src/app/login/login.component';
// import { ProductListComponent } from '../../projects/back-office/src/app/product-list/product-list.component';

>>>>>>> 2496595adbabdc88189dd5b1765cf8c182548a32
export const routes: Routes = [
    //front-office routes
    {path:'', component:HomeComponent},
    {path:'tag/:tag1',component:HomeComponent},
<<<<<<< HEAD
    {path:'home',component:HomeComponent},
    {path: 'home/:searchTerm', component: HomeComponent },
    {path:'search/searchTerm',component:HomeComponent},
    {path:'food/:id',component:FoodpageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
=======
    {path:'food/:id',component:FoodPageComponent},
    //back-office routes
    // {path:'back-office/login',component:LoginComponent},
    // {path:'back-office/products',component:ProductListComponent},

>>>>>>> 2496595adbabdc88189dd5b1765cf8c182548a32
];
