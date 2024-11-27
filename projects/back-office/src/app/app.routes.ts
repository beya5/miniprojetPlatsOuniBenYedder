import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
    {path:'back-office/login', component:LoginComponent},
    { path: '', redirectTo: 'back-office/login', pathMatch: 'full'},
    {path:'back-office/admin',title:'Dashboard',component:AdminComponent, canActivate:[authGuard]},
];
