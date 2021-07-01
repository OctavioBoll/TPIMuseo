export class Entrada{
    numero:number;
      idSede:number;
      idTarifa:number;
      fechaVenta:string;
      horaVenta:string;
      monto:number;
  
    constructor(numero,idSede,idTarifa,fechaVenta,horaVenta,monto){
      this.numero = numero;
      this.idSede = idSede;
      this.idTarifa = idTarifa;
      this.fechaVenta = fechaVenta;
      this.horaVenta = horaVenta;
      this.monto = monto;
    }
  
    esSedeActual(sedeActual_id){
      if (this.idSede === sedeActual_id) {
        return true
        
      }
    }
      
  
    getNumero(sedeActual_id){
      if (this.idSede === sedeActual_id) {
        return this.numero
      }
    }
  
    new(_entradaService){
      let auxEntradaVendida = 0
      const entradaSelect: any = {
        numero: this.numero,
        idSede: this.idSede,
        idTarifa: this.idTarifa,
        fechaVenta: this.fechaVenta,
        horaVenta: this.horaVenta,
        monto: this.monto
      }
      console.log(entradaSelect)
      
      _entradaService.guardarEntrada(entradaSelect).subscribe(data =>{
        auxEntradaVendida = 1
      },error =>{
        auxEntradaVendida = 0
      })

      return auxEntradaVendida

    }
  }