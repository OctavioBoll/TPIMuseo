import { DetalleExposicion } from "./detalleExposicionModel";

export class Exposiciones{
    id:number;
    nombre:string;
    idEmpleadoCreador:number;
    idSede:number;
    fechaInicio:string;
    fechaInicioReplanificada:string;
    fechaFin:string;
    fechaFinReplanificada:string;
    horaApertura:string;
    horaCierra:string;
    detalleExposicion:DetalleExposicion[] = []
  
    constructor(id,nombre,idEmpleadoCreador,idSede,fechaInicio,fechaInicioReplanificada,fechaFin,fechaFinReplanificada,horaApertura,horaCierra,detalleExposicion){
      this.id = id,
      this.nombre = nombre,
      this.idEmpleadoCreador = idEmpleadoCreador,
      this.idSede= idSede,
      this.fechaInicio = fechaInicio,
      this.fechaInicioReplanificada = fechaInicioReplanificada,
      this.fechaFin = fechaFin,
      this.fechaFinReplanificada = fechaFinReplanificada,
      this.horaApertura = horaApertura,
      this.horaCierra = horaCierra,
      this.detalleExposicion = detalleExposicion
    }
  
    //buscar todos los detalles de exposicion de la exposicion vigente
    buscarDuracionExtendidaObra(obra){
      let duracion = 0
      for (let index = 0; index < this.detalleExposicion.length; index++) {

        if (this.detalleExposicion[index].idExposicion === this.id ) {
          let detalleExposicion = new DetalleExposicion(this.detalleExposicion[index].id,
                                                        this.detalleExposicion[index].idExposicion,
                                                        this.detalleExposicion[index].idObra,
                                                        this.detalleExposicion[index].lugarAsignado,
                                                        obra)

          //sumar la duracion extendida de la obra 
          duracion = duracion + detalleExposicion.getDuracionExtendida()
          
        }
      }
      return duracion
          
    }
  }