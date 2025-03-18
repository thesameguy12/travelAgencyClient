import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"   
    },
    {
        path:"home",
        pathMatch:"full",
        loadComponent:()=>{
            return import("./routes/home/home.component").then(m=>m.HomeComponent)
        }
    },
    {
        path:"login",
        pathMatch:"full",
        loadComponent:()=>{
            return import("./routes/login/login.component").then(m=>m.LoginComponent)
        }
    },
    {
        path:"admin",
        pathMatch:"full",
        loadComponent:()=>{
            return import("./routes/admin/admin.component").then(m=>m.AdminComponent)
        }
    }
];
