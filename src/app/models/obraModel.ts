export class Obra{
    id:number;
    nombre:string;
    descripcion:string;
    idEmpleadoCreador:number;
    alto:number;
    ancho:number;
    peso:number;
    valuacion:number;
    fechaCreacion:string;
    fechaPrimerIngreso:string;
    codigoSensor:number;
    duracionExtendida:number;
    duracionResumida:number;
  
    constructor(id,nombre,descripcion,idEmpleadoCreador,alto,ancho,peso,valuacion,fechaCreacion,fechaPrimerIngreso,codigoSensor,duracionExtendida,duracionResumida){
      this.id = id,
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.idEmpleadoCreador = idEmpleadoCreador,
      this.alto = alto,
      this.ancho = ancho,
      this.peso = peso,
      this.valuacion = valuacion,
      this.fechaCreacion = fechaCreacion,
      this.fechaPrimerIngreso = fechaPrimerIngreso,
      this.codigoSensor = codigoSensor,
      this.duracionExtendida = duracionExtendida,
      this.duracionResumida = duracionResumida
    }
  
    getDuracion(){
      return this.duracionExtendida
    }
  }