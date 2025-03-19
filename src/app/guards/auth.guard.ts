import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import {map, catchError, throwError,of, tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const token = localStorage.getItem("token") || "";
  const router=inject(Router)
  return userService.authToken(token).pipe(
    tap((isValid:boolean)=>{
      if(!isValid){
        router.navigate(["/login"],{state:{error:"You must be logged in to acces this page!"}})
      }
    }),
    map((isValid: boolean) => {
      return isValid; 
    }),
    catchError((error) => {
      router.navigate(["/login"],{state:{error:"You must be logged in to acces this page!"}})
      return of(false); 
      
    })
  );
  
};
