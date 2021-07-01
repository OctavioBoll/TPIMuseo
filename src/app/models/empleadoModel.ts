export class Empleado{
    id:number;
    idSede:number;
    apellido:string;
    codigoValidacion:number;
    cuit:string;
    dni:Date;
    domicilio:string;
    fechaIngreso:string;
    fechaNacimiento:string;
    mail:string;
    sexo:string;
    telefono:string;
  
    constructor(id,idSede,apellido,codigoValidacion,cuit,dni,domicilio,fechaIngreso,fechaNacimiento,mail,sexo,telefono){
      this.id = id,
      this.idSede = idSede,
      this.apellido = apellido,
      this.codigoValidacion = codigoValidacion,
      this.cuit = cuit,
      this.dni = dni,
      this.domicilio = domicilio,
      this.fechaIngreso = fechaIngreso,
      this.fechaNacimiento = fechaNacimiento,
      this.mail = mail,
      this.sexo = sexo,
      this.telefono = telefono
    }
  
    getSedeDondeTrabaja(){
        return this.idSede
    }
  }