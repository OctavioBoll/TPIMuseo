import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObraService {


  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Obra/'

  constructor(private http:HttpClient) { }

  getListObra(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
