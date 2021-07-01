
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { Usuario } from './usuarioModel';

@Injectable({
    providedIn: 'root'
  })

export class Sesion {
    id:number;
    idUsuario:number;
    fechaHoraInicio:string;
    fechaHoraFin:string;
    usuario:Usuario[] = []
    
    
    constructor(id,idUsuario,fechaHoraInicio,fechaHoraFin,usuarios)
  {
    this.id = id,
    this.idUsuario = idUsuario,
    this.fechaHoraInicio = fechaHoraInicio,
    this.fechaHoraFin = fechaHoraFin,
    this.usuario = usuarios
  }
  
  //busca en toda la tabla usuario el que tenga IDUsuario de sesion con el ID de la clase usuario
  getEmpleadoEnSesion(){
    for (let index = 0; index < this.usuario.length; index++) {
      if (this.idUsuario == this.usuario[index].id) {
        let selectUsuario = new Usuario(this.usuario[index].id,
                                        this.usuario[index].nombre,
                                        this.usuario[index].idEmpleado,
                                        this.usuario[index].contraseña,
                                        this.usuario[index].caducidad)
        //trae el IDempleado de la clase Usuario
        let respUsuario = selectUsuario.conocerEmpleado()
        
        return respUsuario
      }
    }
  }    
 };