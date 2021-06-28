
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { Usuario } from './usuarioModel';

@Injectable({
    providedIn: 'root'
  })

export class Sesion {
    Id:number;
    idUsuario:number;
    FechaInicio:string;
    FechaFin:string;
    usuario:Usuario[] = []
    sesiones:any = []
    
    
    constructor( )
    { 
    }

    


    
    
 };