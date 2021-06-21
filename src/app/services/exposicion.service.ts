import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExposicionService {

  private myAppUrl = 'https://localhost:44384/'
  private myApiUrl = 'api/Exposicion/'

  constructor(private http:HttpClient) { }

  getListExposicion(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
