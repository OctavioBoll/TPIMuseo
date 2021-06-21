import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoEntradaService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/TipoEntrada/'

  constructor(private http:HttpClient) { }

  getListTipoEntrada(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

}
