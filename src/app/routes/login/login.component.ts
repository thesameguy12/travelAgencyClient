import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  userService=inject(UserService)
  router=inject(Router)
  userForm=new FormGroup({
    username:new FormControl("",{nonNullable:true}),
    password:new FormControl("",{nonNullable:true})
  })
  error:string=""
  constructor(){
    this.userForm.valueChanges.subscribe(()=>{
      this.error=""
    })
  }
  login(){
    const {username,password}=this.userForm.value
    if(username && password){

      this.userService.userLogin(username,password).pipe(catchError((err)=>{
              
              return throwError(()=>new Error(err))
            }))
        .subscribe({
        next:(data)=>{
          if(data.token){
            localStorage.setItem("token",data.token)
            this.router.navigate(["/admin"])
          }
        },
        error:(err)=>{
          this.error="Incorrect username or password"
        }
      })
    }
  }
}
