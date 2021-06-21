import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Empleado/'

  constructor(private http: HttpClient) { }

  getListEmpleado(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
