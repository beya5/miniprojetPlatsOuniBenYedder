import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
// import { LoginComponent } from '../../projects/back-office/src/app/login/login.component';
// import { ProductListComponent } from '../../projects/back-office/src/app/product-list/product-list.component';

export const routes: Routes = [
    //front-office routes
    {path:'', component:HomeComponent},
    {path:'tag/:tag1',component:HomeComponent},
    {path:'food/:id',component:FoodPageComponent},
    //back-office routes
    // {path:'back-office/login',component:LoginComponent},
    // {path:'back-office/products',component:ProductListComponent},

];
