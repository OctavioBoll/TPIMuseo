export class ReservasVisita{
    id:number;
    numero:number;
    idExposicion:number;
    idSede:number;
    idEmpleadoCreador:number;
    cantidadAlumno:number;
    cantidadAlumnoConfirmado:number;
    fechaHoraCreacion:string;
    fechaHoraReserva:string;
    horaInicioReal:string;
    horaFinReal:string;
  
    constructor(id,numero,idExposicion,idSede,idEmpleadoCreador,cantidadAlumno,cantidadAlumnoConfirmado,fechaHoraCreacion,fechaHoraReserva,horaInicioReal,horaFinReal){
      this.id  = id,
      this.numero = numero,
      this.idExposicion = idExposicion,
      this.idSede = idSede,
      this.idEmpleadoCreador = idEmpleadoCreador,
      this.cantidadAlumno = cantidadAlumno,
      this.cantidadAlumnoConfirmado = cantidadAlumnoConfirmado,
      this.fechaHoraCreacion = fechaHoraCreacion,
      this.fechaHoraReserva = fechaHoraReserva,
      this.horaInicioReal = horaInicioReal,
      this.horaFinReal = horaFinReal
      }
  
    esSedeActual(actualSede){
      if (this.idSede === actualSede) {
        return this.cantidadAlumnoConfirmado
        
      }
  }
}