import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from '../admin/admin.component';
export const routes: Routes = [
    {path:'login', component:LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {path:'admin',component:AdminComponent},
];
