import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Entrada/'

  constructor(private http:HttpClient) { }

  getListEntrada(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  guardarEntrada(entrada:any): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, entrada)
  }
}
