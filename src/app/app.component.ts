import { Component,OnInit } from '@angular/core';
import { DetalleExposicion } from './models/detalleExposicionModel';
import { Empleado } from './models/empleadoModel';
import { Entrada } from './models/entradaModel';
import { Exposiciones } from './models/exposicionModel';
import { Obra } from './models/obraModel';
import { ReservasVisita } from './models/reservaVisitaModel';
import { Sede } from './models/sedeModel';
import { Sesion } from './models/sesionModel';
import { Tarifa } from './models/tarifaModel';
import { TipoEntrada } from './models/tipoEntradaModel';
import { TipoVisita } from './models/tipoVisitaModel';
import { Usuario } from './models/usuarioModel';
import { DetalleExposicionService } from './services/detalle-exposicion.service';
import { EmpleadoService } from './services/empleado.service';
import { EntradaService } from './services/entrada.service';
import { ExposicionService } from './services/exposicion.service';
import { ObraService } from './services/obra.service';
import { ReservaVisitaService } from './services/reserva-visita.service';
import { SedeService } from './services/sede.service';
import { SesionService } from './services/sesion.service';
import { TarifaService } from './services/tarifa.service';
import { TipoEntradaService } from './services/tipo-entrada.service';
import { TipoVisitaService } from './services/tipo-visita.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CU102RegistrarEntradas';

  sesion:Sesion[] = [];
  usuario:Usuario[] = [];
  empleado:Empleado [] = [];
  sede:Sede [] = [];
  tarifa:Tarifa[] = [];
  tipoEntrada:TipoEntrada[] = [];
  tipoVisita:TipoVisita[] = [];
  exposicion:Exposiciones[] = [];
  detalleExposicion:DetalleExposicion[] =[];
  obra:Obra[] = [];
  reservaVisita:ReservasVisita[] = [];
  entrada:Entrada[] = [];


  auxSesionSelect:Sesion[] = [];
  auxUsuarioSelect:Usuario[] = [];
  auxEmpleadoSelect:Empleado[] = [];
  auxSedeSelect:Sede[] = [];
  auxTarifaSelect:Tarifa[] = [];

  auxTarifaDos:any[] = []
  auxCantTarifaSelect:any[] = []

  auxTipoEntradaSelect:TipoEntrada[] = [];
  auxTipoVisitaSelect:TipoVisita[] = [];
  auxExposicionSelect:Exposiciones[] = [];
  auxDetalleExposicionSelect:DetalleExposicion[] =[];
  auxObraSelect:Obra[] = [];
  auxReservaVisitaSelect:ReservasVisita[] = [];
  auxEntradaSelect:Entrada[] = [];

  auxCantEntradaSelect = 0;
  auxCantDuracion = 0;

  auxCantEntradaVendidas = 0;
  auxCantEntradaDispo = 0;
  auxCantEntradas = 0;

  guia_select=false;
  guia_selected=false;

  pantalla = 'A'

  constructor(private _sesionService:SesionService,
              private _usuarioService:UsuarioService,
              private _empleadoService:EmpleadoService,
              private _sedeService:SedeService,
              private _tarifasService:TarifaService,
              private _tipoEntradaService:TipoEntradaService,
              private _tipoVisitaService:TipoVisitaService,
              private _exposicionService:ExposicionService,
              private _detalleExposicionService:DetalleExposicionService,
              private _obraService:ObraService,
              private _reservaVisitaService:ReservaVisitaService,
              private _entradaService:EntradaService){}


  ngOnInit():void{
    this.obtenerSesiones();
    this.obtenerUsuarios();
    this.obtenerEmeplado();
    this.obtenerSede();
    this.obtenerTarifa();
    this.obtenerTipoEntrada();
    this.obtenerTipoVisita();
    this.obtenerExposicion();
    this.obtenerDetalleExposicion();
    this.obtenerObra();
    this.obtenerReservaVisita();
    this.obtenerEntrada();
    this.auxUsuarioSelect = [];

  }

  obtenerSesiones(){
    this._sesionService.getEmpleadoEnSesion().subscribe(data =>{
      this.sesion = data
      console.log(this.sesion)
    })
  }
  obtenerUsuarios(){
    this._usuarioService.getListUsuario().subscribe(data =>{
      this.usuario = data
      console.log(this.usuario)
    })
  }
  obtenerEmeplado(){
    this._empleadoService.getListEmpleado().subscribe(data =>{
      this.empleado = data
      console.log(this.empleado)
    })
  }
  obtenerSede(){
    this._sedeService.getListSedes().subscribe(data =>{
      this.sede = data;
      console.log(this.sede)
    })
  }
  obtenerTarifa(){
    this._tarifasService.getListTarifa().subscribe(data =>{
      this.tarifa = data;
      console.log(this.tarifa)
    })
  }
  obtenerTipoEntrada(){
    this._tipoEntradaService.getListTipoEntrada().subscribe(data =>{
      this.tipoEntrada = data;
      console.log(this.entrada)
    })
  }
  obtenerTipoVisita(){
    this._tipoVisitaService.getListTipoVisita().subscribe(data =>{
      this.tipoVisita = data;
      console.log(this.tipoVisita)
    })
  }
  obtenerExposicion(){
    this._exposicionService.getListExposicion().subscribe(data =>{
      this.exposicion = data;
      console.log(this.exposicion)
    })
  }
  obtenerDetalleExposicion(){
    this._detalleExposicionService.getListDetalleExposicion().subscribe(data =>{
      this.detalleExposicion = data;
      console.log(this.detalleExposicion)
    })
  }
  obtenerObra(){
    this._obraService.getListObra().subscribe(data =>{
      this.obra = data;
      console.log(this.obra)
    })
  }
  obtenerReservaVisita(){
    this._reservaVisitaService.getListReservaVisita().subscribe(data =>{
      this.reservaVisita = data;
      console.log(this.reservaVisita)
    })
  }
  obtenerEntrada(){
    this._entradaService.getListEntrada().subscribe(data =>{
      this.entrada = data;
      console.log(this.entrada)
    })
  }


  
  

  iniciaSesion(){
    this.pantalla = 'B'
    this.auxSesionSelect.push(this.sesion[0])
    console.log(this.auxSesionSelect[0].idUsuario)
    this.buscarUsuario(this.auxSesionSelect[0].idUsuario)
    
  }

  buscarUsuario(id){
    for (let index = 0; index < this.usuario.length; index++) {
      console.log(this.usuario[index].id)
      if(id == this.usuario[index].id){
        console.log('id',id)

        this.auxUsuarioSelect.push(this.usuario[index]);
        console.log('usuario select',this.usuario[index].id)
      }
    }

    this.buscarEmpleado();
  }

  //conocerEmpleado()
  buscarEmpleado(){
    for (let index = 0; index < this.empleado.length; index++) {
      if(this.auxUsuarioSelect[0].idEmpleado == this.empleado[index].id){
        console.log(' buscarEmpleado idEmpleado del usuario',this.auxUsuarioSelect[0].idEmpleado)
        this.auxEmpleadoSelect.push(this.empleado[index])
        console.log('empleado select',this.empleado[index])
      }
    }

    this.buscarSede()
  }
  //buscarSedeEmpleado()
  buscarSede(){
    for (let index = 0; index < this.sede.length; index++) {
      if(this.auxEmpleadoSelect[0].idSede == this.sede[index].id){
        this.auxSedeSelect.push(this.sede[index])
        console.log('Sede',this.auxSedeSelect[0])
      }
    }
    this.buscarTarifaVigentes()
  }

  fecha(){
    var fecha = new Date()
    var fechaActual = ""
    var dia = fecha.getDate().toString();
    var mes = (fecha.getMonth()+1).toString();
    var año = fecha.getFullYear().toString();
    if ( dia.length <= 1) {
      dia = "0" + dia
    }
    if (mes.length <= 1) {
      mes = "0" + mes
    }
    fechaActual = dia + "/" + mes + "/" + año;
    return fechaActual

  }
  hora(){

    var tiempo = new Date()
    var horaActual = ""
    var hora = tiempo.getHours().toString();
    var minutos = tiempo.getMinutes().toString();
    var segundos = tiempo.getSeconds().toString();
    horaActual = hora + ":" + minutos + ":" + segundos;
    return horaActual
  }

  buscarTarifaVigentes(){
    let fechas = new Date();
    let hora = this.hora();
    console.log('buscarTarifavigentes', this.tarifa[0])

    for (let index = 0; index < this.tarifa.length; index++) {

      let diaIn = parseInt(this.tarifa[index].fechaInicioVigencia.slice(0,2))
      let mesIn = parseInt(this.tarifa[index].fechaInicioVigencia.slice(3,5))
      let añoIn =  parseInt(this.tarifa[index].fechaInicioVigencia.slice(6,10))
      

      let diaVen = parseInt(this.tarifa[index].fechaFinVigencia.slice(0,2))
      let mesVen = parseInt(this.tarifa[index].fechaFinVigencia.slice(3,5))
      let añoVen =  parseInt(this.tarifa[index].fechaFinVigencia.slice(6,10))
      

      
      console.log('fecha',this.tarifa[index].fechaFinVigencia)
      //&&(this.tarifa[index].fechaInicioVigencia <= fechas && fechas <=this.tarifa[index].fechaInicioVigencia
      if((this.auxSedeSelect[0].id == this.tarifa[index].idSede) && 
        (añoIn <= fechas.getFullYear() && mesIn <= (fechas.getMonth()+1) && diaIn <= fechas.getDate()) && 
        (añoVen >= fechas.getFullYear() && mesVen >= (fechas.getMonth()+1) && diaVen >= fechas.getDate())){
        this.auxTarifaSelect.push(this.tarifa[index])
        console.log("tarifas vigentes" , this.auxTarifaSelect)
      } 
    }
  }

  
  tomarSeleccionTarifa(id){
    this.pantalla = 'C'
    console.log('tomarSelecTarifa',id)
    for (let index = 0; index < this.auxTarifaSelect.length; index++) {
      if (id == this.auxTarifaSelect[index].id) {
        this.auxTarifaDos.push(this.auxTarifaSelect[index])
        console.log("auxTarifaDos",this.auxTarifaDos)
      }
    }
    this.auxCantDuracion =  this.calcularDuracionEstimadaCompleta() / 60

    this.auxCantEntradaVendidas += this.buscarReservasSedeActual()
    this.auxCantEntradaVendidas += this.buscarEntradasSedeActual()


    this.auxCantEntradaDispo = this.auxSedeSelect[0].cantMaxVisitates - this.auxCantEntradaVendidas;
    console.log(this.auxCantEntradaVendidas)
    console.log(this.auxSedeSelect[0].cantMaxVisitates)
    console.log(this.auxCantEntradaDispo)
    this.auxCantEntradaVendidas = 0
    

  }

  calcularDuracionEstimadaCompleta(){
    let fechas = new Date();
    let canDuracionEstimada = 0;
    for (let indexUno = 0; indexUno < this.exposicion.length; indexUno++) {

      let diaIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(0,2))
      let mesIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(3,5))
      let añoIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(6,10))
      

      let diaVen = parseInt(this.exposicion[indexUno].fechaFin.slice(0,2))
      let mesVen = parseInt(this.exposicion[indexUno].fechaFin.slice(3,5))
      let añoVen = parseInt(this.exposicion[indexUno].fechaFin.slice(6,10))


      if ((this.auxSedeSelect[0].id = this.exposicion[indexUno].idSede) &&
          (añoIn <= fechas.getFullYear() && mesIn <= (fechas.getMonth()+1) && diaIn <= fechas.getDate()) && 
          (añoVen >= fechas.getFullYear() && mesVen >= (fechas.getMonth()+1) && diaVen >= fechas.getDate())) {
        console.log(this.exposicion[indexUno])
        for (let indexDos = 0; indexDos < this.detalleExposicion.length; indexDos++) {
          if(this.detalleExposicion[indexDos].idExposicion = this.exposicion[indexUno].id)

          for (let indexTres = 0; indexTres < this.obra.length; indexTres++) {
            if (this.obra[indexTres].id = this.detalleExposicion[indexDos].idObra) {
              canDuracionEstimada += this.obra[indexTres].duracionExtendida;
            } 
          } 
        }
      }
    }
    return canDuracionEstimada
  }

  buscarLimiteVisitantes(){
    let limiteVisitantes = this.auxSedeSelect[0].cantMaxVisitates
  }

  buscarReservasSedeActual(){
    let fecha = new Date;
    let countCantReservas = 0;
    for (let index = 0; index < this.reservaVisita.length; index++) {

      let diaIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(0,2))
      let mesIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(3,5))
      let añoIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(6,10))
      
      console.log('fechaHorareserva',this.reservaVisita[index].fechaHoraReserva)
      console.log(diaIn)
      console.log(mesIn)
      console.log(añoIn)

      //let diaVen = parseInt(this.exposicion[index].fechaFin.slice(0,2))
      //let mesVen = parseInt(this.exposicion[index].fechaFin.slice(3,5))
      //let añoVen = parseInt(this.exposicion[index].fechaFin.slice(6,10))

      //this.reservaVisita[index].fechaHoraReserva = fecha
      console.log(this.reservaVisita[index])
      if ((this.auxSedeSelect[0].id = this.reservaVisita[index].idSede) &&
          (añoIn == fecha.getFullYear() && mesIn == (fecha.getMonth()+1) && diaIn == fecha.getDate())){
            
         countCantReservas += 1
      }
    }
    return countCantReservas
  }

  buscarEntradasSedeActual(){
    let fecha = new Date;
    let countCantEntrada = 0;
    for (let index = 0; index < this.entrada.length; index++) {

      let diaIn = parseInt(this.entrada[index].fechaVenta.slice(0,2))
      let mesIn = parseInt(this.entrada[index].fechaVenta.slice(3,5))
      let añoIn = parseInt(this.entrada[index].fechaVenta.slice(6,10))


      if ((this.auxSedeSelect[0].id = this.entrada[index].idSede) && 
          (añoIn == fecha.getFullYear() && mesIn == (fecha.getMonth()+1) && diaIn == fecha.getDate())) { 

            countCantEntrada += 1
      }
    }
    return countCantEntrada
  }


  DetalleEntradas(){
    this.pantalla = "D"

    for (let index = 0; index < this.auxCantEntradas; index++) {

      console.log("index",index)
      
      this.auxCantTarifaSelect.push(this.auxTarifaDos[0])
      console.log("auxEntradaSelect",this.auxCantTarifaSelect)
      
    }

    
    
  }

  ComprarEntradas(){
    
    
    for (let index = 0; index < this.auxCantTarifaSelect.length; index++) { 
      
      console.log("monto total",this.auxCantTarifaSelect[index].monto + this.auxCantTarifaSelect[index].montoAdicionalGuia)
      let precio = 0
      console.log("guia select",this.guia_select)
      if (this.guia_select == true) {
        precio = this.auxCantTarifaSelect[index].monto + this.auxCantTarifaSelect[index].montoAdicionalGuia
        console.log("auxCant",this.auxCantTarifaSelect[index].monto)
        console.log("precio",precio)
      }
      else {
        
          precio = this.auxCantTarifaSelect[index].monto 
          
          console.log("precio",precio)
          console.log("auxCant",this.auxCantTarifaSelect[index].monto)
  
        
      }
      
      
      const entradaSelect: Entrada = {
        numero:0,
        idSede:this.auxCantTarifaSelect[index].idSede,
        idTarifa:this.auxCantTarifaSelect[index].id,
        fechaVenta:this.fecha(),
        horaVenta:this.hora(),
        monto: precio
      }
        
      

      console.log("auxEntradaSelect",entradaSelect)
      this._entradaService.guardarEntrada(entradaSelect).subscribe(data =>{
        console.log(data)
      })
      
    }

    this.auxCantTarifaSelect = [];
    this.auxCantEntradas = 0;


    this.auxTarifaDos= []


    this.auxCantTarifaSelect = []
  
    this.auxTipoEntradaSelect = [];
    this.auxTipoVisitaSelect = [];
    this.auxExposicionSelect = [];
    this.auxDetalleExposicionSelect =[];
    this.auxObraSelect = [];
    this.auxReservaVisitaSelect = [];
    this.auxEntradaSelect = [];
  
    this.auxCantEntradaSelect = 0;
    this.auxCantDuracion = 0;
  
    this.auxCantEntradaVendidas = 0;
    this.auxCantEntradaDispo = 0;
    this.auxCantEntradas = 0;
    this.guia_select = false;


    this.pantalla = "B"
  }

  VolverATarifas(){
    this.pantalla = "B"
    this.auxCantTarifaSelect = [];
    this.auxCantEntradas = 0;
    this.auxTarifaDos= []
    this.auxCantEntradaDispo = 0;
    this.guia_select = false;
  }

  GuiaSelect(){
    if (this.guia_select == true) {
      this.guia_select = false
      
    }
    else{
      this.guia_select = true
    }
    console.log(this.guia_select)
  }








  









}


