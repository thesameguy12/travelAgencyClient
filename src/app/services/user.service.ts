import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http=inject(HttpClient)
  api:string=environment.apiUrl
  userLogin(username:string, password:string):Observable<{token:string}>{
    return this.http.post<{token:string}>(`${this.api}/authenticate`,{username:username,password:password})
  }
  authToken(token:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.api}/checkToken/${token || ""}`)
  }
  constructor() { }
}
