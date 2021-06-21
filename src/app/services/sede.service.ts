import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Sede/'

  constructor(private http: HttpClient) { }
  
  getListSedes(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
