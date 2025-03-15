import { Component, inject, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { CityDto } from '../../models/city-dto';
import { catchError, throwError } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { LineComponent } from '../../components/line/line.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule,LineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  cityService=inject(CityService)

  cityes:CityDto[]=[]

  cityForm=new FormGroup({
    cityTo:new FormControl(0),
    cityFrom:new FormControl(0)
  })
  constructor(){
    
  }
  ngOnInit(): void {
    
      this.cityService.getCities().pipe(catchError((err)=>{
        
        return throwError(()=>new Error(err))
      })).subscribe({
        next:(data)=>{
          this.cityes=data
          console.log(this.cityes)
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }
  
}
