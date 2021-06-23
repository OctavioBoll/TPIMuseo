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


  nuevaVentaEntrada(){
    this.pantalla = 'B'
    //getEmpleadoEnSesion
    this.auxSesionSelect.push(this.sesion[0])
    console.log(this.auxSesionSelect[0].idUsuario)
    this.buscarUsuario(this.auxSesionSelect[0].idUsuario)
    
  }

  buscarUsuario(id){
    
    for (let index = 0; index < this.usuario.length; index++) {
      console.log(this.usuario[index].id)
      //buscar en todos los usuarios el usuario con idUsuario de sesion
      if(id == this.usuario[index].id){
        //guardar el usuario que tiene la sesion
        this.auxUsuarioSelect.push(this.usuario[index]);
      }
    }

    this.buscarEmpleado();
  }

  //conocerEmpleado()
  buscarEmpleado(){
    for (let index = 0; index < this.empleado.length; index++) {
      //buscar en todos los empleados el empleado que tiene el idEmpleado de usuario seleccionado
      if(this.auxUsuarioSelect[0].idEmpleado == this.empleado[index].id){
        this.auxEmpleadoSelect.push(this.empleado[index])
      }
    }

    this.buscarSede()
  }
  //buscarSedeEmpleado()
  buscarSede(){
    for (let index = 0; index < this.sede.length; index++) {
      //buscar en todas las sedes la sede con idSede de empleado 
      if(this.auxEmpleadoSelect[0].idSede == this.sede[index].id){
        //seleccionar sede
        this.auxSedeSelect.push(this.sede[index])
      }
    }
    this.buscarTarifaVigentes()
  }

  //getFecha()
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

  //getHora()
  hora(){
    var tiempo = new Date()
    var horaActual = ""
    var hora = tiempo.getHours().toString();
    var minutos = tiempo.getMinutes().toString();
    var segundos = tiempo.getSeconds().toString();
    horaActual = hora + ":" + minutos + ":" + segundos;
    return horaActual
  }

  //
  buscarTarifaVigentes(){
    let fechas = new Date();
    let hora = this.hora();


    console.log('buscarTarifavigentes', this.tarifa[0])

    //Buscar en todas las tarifas
    for (let index = 0; index < this.tarifa.length; index++) {

      //De las tarifas buscar dia inicio, mes inicio y año inicio
      let diaIn = parseInt(this.tarifa[index].fechaInicioVigencia.slice(0,2))
      let mesIn = parseInt(this.tarifa[index].fechaInicioVigencia.slice(3,5))
      let añoIn =  parseInt(this.tarifa[index].fechaInicioVigencia.slice(6,10))
      
      //De las tarifas buscar dia vencimiento, mes vencimiento, año vencimiento
      let diaVen = parseInt(this.tarifa[index].fechaFinVigencia.slice(0,2))
      let mesVen = parseInt(this.tarifa[index].fechaFinVigencia.slice(3,5))
      let añoVen =  parseInt(this.tarifa[index].fechaFinVigencia.slice(6,10))
      
      //Buscar y guardar la tarifa que pertenezca a la sede seleccionada y que este entre las fechas vigentes
      if((this.auxSedeSelect[0].id == this.tarifa[index].idSede) && 
        (añoIn <= fechas.getFullYear() && mesIn <= (fechas.getMonth()+1) && diaIn <= fechas.getDate()) && 
        (añoVen >= fechas.getFullYear() && mesVen >= (fechas.getMonth()+1) && diaVen >= fechas.getDate())){
        //Guardar las tarifas Disponibles
        //auxTarifaSelect Tarifas disponibles
          this.auxTarifaSelect.push(this.tarifa[index])
        
      } 
    }
  }

  //Seleccion de la tarifa que Desea comprar
  tomarSeleccionTarifa(id){
    this.pantalla = 'C'
    //Buscar en todas las tarifas disponibles y guardar la tarifa seleccionada
    for (let index = 0; index < this.auxTarifaSelect.length; index++) {
      if (id == this.auxTarifaSelect[index].id) {
        //auxTarifaDos Tarifa seleccionada 
        this.auxTarifaDos.push(this.auxTarifaSelect[index])
        console.log("auxTarifaDos",this.auxTarifaDos)
      }
    }
    //Guardar la Duracion Completa de las obras de la sede dividido 60 para convertirlo en horas
    this.auxCantDuracion =  this.calcularDuracionEstimadaCompleta() / 60

    //Guardar la Cantidad disponible de entradas para la Sede
    this.auxCantEntradaVendidas += this.buscarReservasSedeActual()
    this.auxCantEntradaVendidas += this.buscarEntradasSedeActual()
    this.auxCantEntradaDispo = this.auxSedeSelect[0].cantMaxVisitates - this.auxCantEntradaVendidas;
    
   //Resetear variable de por si se vuelve para atras 
    this.auxCantEntradaVendidas = 0
    

  }

  calcularDuracionEstimadaCompleta(){
    
    let fechas = new Date();
    let canDuracionEstimada = 0;
    //Buscar en todas las exposiciones 
    for (let indexUno = 0; indexUno < this.exposicion.length; indexUno++) {

      //Guardar el dia inicio, mes inicio, año inicio de la exposicion
      let diaIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(0,2))
      let mesIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(3,5))
      let añoIn = parseInt(this.exposicion[indexUno].fechaInicio.slice(6,10))
      
      //Guardar el dia fin, mes fin, año fin de la exposicion
      let diaVen = parseInt(this.exposicion[indexUno].fechaFin.slice(0,2))
      let mesVen = parseInt(this.exposicion[indexUno].fechaFin.slice(3,5))
      let añoVen = parseInt(this.exposicion[indexUno].fechaFin.slice(6,10))

      //de la exposicion que pertenece a la sede seleccionada y que tenga fecha entre el inicio y fin de la exposicion
      if ((this.auxSedeSelect[0].id = this.exposicion[indexUno].idSede) &&
          (añoIn <= fechas.getFullYear() && mesIn <= (fechas.getMonth()+1) && diaIn <= fechas.getDate()) && 
          (añoVen >= fechas.getFullYear() && mesVen >= (fechas.getMonth()+1) && diaVen >= fechas.getDate())) {
        
        //Buscar en todas las exposiciones el detalleExposicion
        for (let indexDos = 0; indexDos < this.detalleExposicion.length; indexDos++) {
          if(this.detalleExposicion[indexDos].idExposicion = this.exposicion[indexUno].id)
            
          //Buscar en el Detalle Exposicion todas las obras
          for (let indexTres = 0; indexTres < this.obra.length; indexTres++) {
            if (this.obra[indexTres].id = this.detalleExposicion[indexDos].idObra) {
              //Guardar la Duracion extendida de obra que tenga exposicion vigente en la sede seleccionada
              canDuracionEstimada += this.obra[indexTres].duracionExtendida;
            } 
          } 
        }
      }
    }
    return canDuracionEstimada
  }


  buscarReservasSedeActual(){
    let fecha = new Date;

    let countCantReservas = 0;

    //de Todas las Reservas 
    for (let index = 0; index < this.reservaVisita.length; index++) {

      // Traer el dia, mes y año de la reserva
      let diaIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(0,2))
      let mesIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(3,5))
      let añoIn = parseInt(this.reservaVisita[index].fechaHoraReserva.slice(6,10))

      //buscar las reservas de la sede seleccionada con el dia, mes y año del dia actual
      if ((this.auxSedeSelect[0].id = this.reservaVisita[index].idSede) &&
          (añoIn == fecha.getFullYear() && mesIn == (fecha.getMonth()+1) && diaIn == fecha.getDate())){
        
        //Sumar si hay una reserva 
        countCantReservas += 1
      }
    }
    return countCantReservas
  }

  buscarEntradasSedeActual(){
    let fecha = new Date;
    let countCantEntrada = 0;
    //buscar en todas las entradas
    for (let index = 0; index < this.entrada.length; index++) {
      
      //Guardar dia mes y año de la venta de la entrada
      let diaIn = parseInt(this.entrada[index].fechaVenta.slice(0,2))
      let mesIn = parseInt(this.entrada[index].fechaVenta.slice(3,5))
      let añoIn = parseInt(this.entrada[index].fechaVenta.slice(6,10))

      //buscar entradas de la sede seleccionada y con fecha igual al dia de la venta
      if ((this.auxSedeSelect[0].id = this.entrada[index].idSede) && 
          (añoIn == fecha.getFullYear() && mesIn == (fecha.getMonth()+1) && diaIn == fecha.getDate())) { 

            countCantEntrada += 1
      }
    }
    return countCantEntrada
  }


  DetalleEntradas(){
    //Mostrar Pantalla con detalle de las entradas
    this.pantalla = "D"

    //auxCantEntradas variable guardada en la pantalla cantidad de entradas
    for (let index = 0; index < this.auxCantEntradas; index++) {

      //guardar la cantidad de tarifas segun la cantidad seleccionada
      this.auxCantTarifaSelect.push(this.auxTarifaDos[0])
    }
  }

  //selecciona la opcion Comprar en la pantalla Detalle de las entradas
  ComprarEntradas(){
    
    //de toda la coleccion de tarifa con la cantidad seleccionada
    for (let index = 0; index < this.auxCantTarifaSelect.length; index++) { 
      
      let precio = 0
      
      //si selecciona con guia calcular el precio con monto adicional con guia
      if (this.guia_select == true) {
        precio = this.auxCantTarifaSelect[index].monto + this.auxCantTarifaSelect[index].montoAdicionalGuia
      }
      //si no selecciona con guia calcular el precio sin monto adicional
      else {
          precio = this.auxCantTarifaSelect[index].monto 
      }
      
      //guardar en una variable los datos de la entrada de la tarifa seleccionada
      const entradaSelect: Entrada = {
        numero:0,
        idSede:this.auxCantTarifaSelect[index].idSede,
        idTarifa:this.auxCantTarifaSelect[index].id,
        fechaVenta:this.fecha(),
        horaVenta:this.hora(),
        monto: precio
      }
        
      //PUT a la base de datos la entrada la cantidad de veces del for de la cantidad seleccionada
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


