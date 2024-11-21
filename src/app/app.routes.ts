import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from '../../projects/back-office/src/app/login/login.component';
 import { AdminComponent } from '../../projects/back-office/src/admin/admin.component';

export const routes: Routes = [
    //front-office routes
   
    {path:'tag/:tag1',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path: 'home/:searchTerm', component: HomeComponent },
    {path:'search/searchTerm',component:HomeComponent},
    {path:'food/:id',component:FoodpageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'food/:id',component:FoodpageComponent},
    //back-office routes
    {path:'back-office/login',component:LoginComponent},
    {path:'back-office/admin',component:AdminComponent},

];
