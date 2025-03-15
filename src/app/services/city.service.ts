import { inject, Injectable } from '@angular/core';
import { CityDto } from '../models/city-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  http=inject(HttpClient)
  api=environment.apiUrl
  
  getCities(){
    return this.http.get<CityDto[]>(`${this.api}/api/v1/city`)
  }
  postCityes(city:CityDto){
    const token:String=localStorage.getItem("authToken") || ""
    const headers=new HttpHeaders().set("Authorization",`Bearer ${token}`)
    return this.http.post(`${this.api}/api/v1/city`,city,{headers})
  }
}
