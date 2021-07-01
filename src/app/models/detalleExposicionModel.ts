import { Exposiciones } from "./exposicionModel";
import { Obra } from "./obraModel";

export class DetalleExposicion{
    id:number;
    idExposicion:number;
    idObra:number;
    lugarAsignado:string;
    obra:Obra[] = []
  
    constructor(id,idExposicion,idObra,lugarAsignado,obra){
      this.id = id,
      this.idExposicion = idExposicion,
      this.idObra = idObra,
      this.lugarAsignado = lugarAsignado,
      this.obra = obra
      }
  
    getDuracionExtendida(){
      let duracion = 0
      for (let index = 0; index < this.obra.length; index++) {
        if (this.idObra == this.obra[index].id){
          
          let obras = new Obra(this.obra[index].id,
                               this.obra[index].nombre,
                               this.obra[index].descripcion,
                               this.obra[index].idEmpleadoCreador,
                               this.obra[index].alto,
                               this.obra[index].ancho,
                               this.obra[index].peso,
                               this.obra[index].valuacion,
                               this.obra[index].fechaCreacion,
                               this.obra[index].fechaPrimerIngreso,
                               this.obra[index].codigoSensor,
                               this.obra[index].duracionExtendida,
                               this.obra[index].duracionResumida)

          duracion = duracion + obras.getDuracion()
        }
      }
      return duracion
    }
  }