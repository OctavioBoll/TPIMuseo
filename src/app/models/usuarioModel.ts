export class Usuario {
    id:number;
    nombre:string;
    idEmpleado:number;
    contraseña:string;
    caducidad:string;

  constructor(id, nombre, idEmpleado, contraseña, caducidad)
  {
    this.id = id,
    this.nombre = nombre,
    this.idEmpleado = idEmpleado,
    this.contraseña = contraseña,
    this.caducidad = caducidad
  }
  
  conocerEmpleado(){
    return this.idEmpleado
  }
}