import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Usuario/'

  constructor(private http: HttpClient) { }

  getListUsuario(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  getActualUsuario(id:number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id)
  }

}
