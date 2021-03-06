import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Sesion/'

  constructor( private http:HttpClient) { }

  getEmpleadoEnSesion():Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)

  }
}
