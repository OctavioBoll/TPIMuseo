import { Tarifa } from '../models/tarifaModel'
import { Exposiciones } from './exposicionModel';

export class Sede {
  id: number;
  nombre: string;
  cantMaxVisitates: number;
  cantMaxPorGuia: number;
  tarifa: Tarifa[] = [];
  exposicion: Exposiciones[] = [];

  constructor(id, nombre, cantMaxVisitates, cantMaxPorGuia, tarifa, exposicion) {
    this.id = id,
      this.nombre = nombre,
      this.cantMaxVisitates = cantMaxVisitates,
      this.cantMaxPorGuia = cantMaxPorGuia
    this.tarifa = tarifa
    this.exposicion = exposicion
  }

  
  buscarTarifasVigentes(fecha) {
    let auxTarifa_objet: Tarifa[] = []
    //buscar en todas las tarifas y seleccionar la que es igual a la id de la tarifa correcta
    for (let index = 0; index < this.tarifa.length; index++) {
      let auxTarifas = new Tarifa(this.tarifa[index].id,
        this.tarifa[index].idSede,
        this.tarifa[index].idTipoEntrada,
        this.tarifa[index].idTipoVisita,
        this.tarifa[index].fechaInicioVigencia,
        this.tarifa[index].fechaFinVigencia,
        this.tarifa[index].monto,
        this.tarifa[index].montoAdicionalGuia)
        //guardar todas las tarifas en un arreglo las tarifas vigentes
      if (this.id === this.tarifa[index].idSede) {
        auxTarifa_objet.push(auxTarifas.esVigente(fecha))
        console.log(auxTarifa_objet)
      }
    }
    return auxTarifa_objet
  }

  //buscar si la exposicion vigente
  esVigente(fecha, detalleExposicion, obra) {

    //pasar la fecha a numero para comparar 
    let fechaActual = fecha.slice(6, 10) + fecha.slice(3, 5) + fecha.slice(0, 2)
    fechaActual = parseInt(fechaActual)

    //variables para usar la fechas
    let fechaInicio
    let fechaVencimiento

    //acumualador de minutos de la obras
    let duracion = 0

    //de todas las exposiciones y buscar cual es vigente
    for (let index = 0; index < this.exposicion.length; index++) {
      
      let exposicionVigente = new Exposiciones(this.exposicion[index].id,
        this.exposicion[index].nombre,
        this.exposicion[index].idEmpleadoCreador,
        this.exposicion[index].idSede,
        this.exposicion[index].fechaInicio,
        this.exposicion[index].fechaInicioReplanificada,
        this.exposicion[index].fechaFin,
        this.exposicion[index].fechaFinReplanificada,
        this.exposicion[index].horaApertura,
        this.exposicion[index].horaCierra,
        detalleExposicion)

        //guardar fecha inicio con numero para comparar 
      fechaInicio = this.exposicion[index].fechaInicio.slice(6, 10) +
        this.exposicion[index].fechaInicio.slice(3, 5) +
        this.exposicion[index].fechaInicio.slice(0, 2)
        //pasarlo a numero 
        fechaInicio = parseInt(fechaInicio)

        //guardar fecha vencimiento
      fechaVencimiento = this.exposicion[index].fechaFin.slice(6, 10) +
        this.exposicion[index].fechaFin.slice(3, 5) +
        this.exposicion[index].fechaFin.slice(0, 2)
        //pasarlo a numero
      fechaVencimiento = parseInt(fechaVencimiento)

      
        //comparar la fechas para encontrar la exposicion vigente 
      if (fechaInicio <= fechaActual && 
          fechaActual <= fechaVencimiento && 
          this.id === this.exposicion[index].idSede) {
        duracion = duracion + exposicionVigente.buscarDuracionExtendidaObra(obra)
      }
    }
    return duracion
  }

  getCantMaxVisitantes() {
    return this.cantMaxVisitates
  }
}