import { Entrada } from "./entradaModel";

export class Tarifa{
    id:number;
    idSede:number;
    idTipoEntrada:number;
    idTipoVisita:number;
    fechaInicioVigencia:string;
    fechaFinVigencia:string;
    monto:number;
    montoAdicionalGuia:number;
  
    constructor(id,idSede,idTipoEntrada,idTipoVisita,fechaInicioVigencia,fechaFinVigencia,monto,montoAdicionalGuia){
      this.id = id,
      this.idSede = idSede,
      this.idTipoEntrada = idTipoEntrada,
      this.idTipoVisita = idTipoVisita,
      this.fechaInicioVigencia = fechaInicioVigencia,
      this.fechaFinVigencia = fechaFinVigencia,
      this.monto = monto,
      this.montoAdicionalGuia = montoAdicionalGuia
    }
  
    //pasar la fecha actual a numero para comparar 
    esVigente(fecha){
    
      let fechaActual = (   fecha.slice(6,10) + fecha.slice(3,5) + fecha.slice(0,2))
      fechaActual = parseInt(fechaActual)

      //fecha inicio vigencia de la tarifa y se pasa a numero unido 
      let fechaInicio:any
      fechaInicio = (this.fechaInicioVigencia.slice(6,10) + this.fechaInicioVigencia.slice(3,5) + this.fechaInicioVigencia.slice(0,2))
      fechaInicio = parseInt(fechaInicio)

      //fecha Vencimiento de la tarifa y se pasa a numero unido 
      let fechaVencimiento:any
      fechaVencimiento = (this.fechaFinVigencia.slice(6,10) + this.fechaFinVigencia.slice(3,5) + this.fechaFinVigencia.slice(0,2))
      fechaVencimiento = parseInt(fechaVencimiento)

    
      if (fechaInicio <= fechaActual && fechaActual <= fechaVencimiento) {
        
        let auxTarifa = new Tarifa(
                            this.id,
                             this.idSede,
                             this.idTipoEntrada,
                             this.idTipoVisita,
                             this.fechaInicioVigencia,
                             this.fechaFinVigencia,
                             this.monto,
                             this.montoAdicionalGuia)
        
        return auxTarifa
      }
    }
  }