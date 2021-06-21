import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleExposicionService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/DetalleExposicion/'

  constructor(private http:HttpClient) { }

  getListDetalleExposicion(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
