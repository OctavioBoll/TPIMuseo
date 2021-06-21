import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaVisitaService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/ReservaVisita/'

  constructor(private http:HttpClient) { }

  getListReservaVisita(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
