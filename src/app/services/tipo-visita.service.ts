import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVisitaService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/TipoVisita/'

  constructor(private http:HttpClient) { }

  getListTipoVisita(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
