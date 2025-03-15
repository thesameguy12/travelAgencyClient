import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LineRequestDto } from '../models/line-dto';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  api=environment.apiUrl
  http=inject(HttpClient)
  constructor() { }

  getLineByCityFromTo(cityIdFrom:number,cityIdTo:number):Observable<LineRequestDto[]>{
    
    return this.http.get<LineRequestDto[]>(`${this.api}/api/v1/line/getLineByCityFromTo?from=${cityIdFrom}&to=${cityIdTo}`).pipe(
      catchError((err)=>{
        console.log(err)
        return throwError(()=>new Error(err))
      })
    )
  }
}
