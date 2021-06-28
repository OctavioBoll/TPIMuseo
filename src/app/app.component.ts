import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component,OnInit } from '@angular/core';
//import { count } from 'console';
//import { DetalleExposicion } from './models/detalleExposicionModel';
//import { Empleado } from './models/empleadoModel';
//import { Entrada } from './models/entradaModel';
//import { Exposiciones } from './models/exposicionModel';
//import { Obra } from './models/obraModel';
//import { ReservasVisita } from './models/reservaVisitaModel';
//import { Sede } from './models/sedeModel';
//import { Sesion } from './models/sesionModel';
//import { Tarifa } from './models/tarifaModel';
import { TipoEntrada } from './models/tipoEntradaModel';
import { TipoVisita } from './models/tipoVisitaModel';
//import { Usuario } from './models/usuarioModel';
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
  usuarios:Usuario[] = [];
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

  pruUsuario:any;
  pruEmpleado:any;
 
  auxUsuariosSelect:any;
  auxTarifasSelect:any;
  fechas = "";
  horas = "";

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
              private _entradaService:EntradaService
              ){}


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
      
    })
  }
  obtenerUsuarios(){
    this._usuarioService.getListUsuario().subscribe(data =>{
      this.usuarios = data
      
    })
  }
  obtenerEmeplado(){
    this._empleadoService.getListEmpleado().subscribe(data =>{
      this.empleado = data
    })
  }
  obtenerSede(){
    this._sedeService.getListSedes().subscribe(data =>{
      this.sede = data;
    })
  }
  obtenerTarifa(){
    this._tarifasService.getListTarifa().subscribe(data =>{
      this.tarifa = data;
    })
  }
  obtenerTipoEntrada(){
    this._tipoEntradaService.getListTipoEntrada().subscribe(data =>{
      this.tipoEntrada = data;
    })
  }
  obtenerTipoVisita(){
    this._tipoVisitaService.getListTipoVisita().subscribe(data =>{
      this.tipoVisita = data;
    })
  }
  obtenerExposicion(){
    this._exposicionService.getListExposicion().subscribe(data =>{
      this.exposicion = data;
    })
  }
  obtenerDetalleExposicion(){
    this._detalleExposicionService.getListDetalleExposicion().subscribe(data =>{
      this.detalleExposicion = data;
    })
  }
  obtenerObra(){
    this._obraService.getListObra().subscribe(data =>{
      this.obra = data;
    })
  }
  obtenerReservaVisita(){
    this._reservaVisitaService.getListReservaVisita().subscribe(data =>{
      this.reservaVisita = data;
    })
  }
  obtenerEntrada(){
    this._entradaService.getListEntrada().subscribe(data =>{
      this.entrada = data;
    })
  }


 //----------------
  nuevaVentaEntrada(){
    this.pantalla = 'B'
    //getEmpleadoEnSesion
    
    //this.auxSesionSelect.push(this.sesion[0])
    //console.log(this.auxSesionSelect[0].idUsuario)
    //this.buscarUsuario(this.auxSesionSelect[0].idUsuario)
      
      
     this.auxUsuariosSelect = this.buscarEmpleadoLogueado();
     console.log(this.auxUsuariosSelect.idEmpleado)

     this.auxEmpleadoSelect = this.buscarSedeEmpleado(); 
     console.log(this.auxEmpleadoSelect)  
     
     this.fechas = this.fecha()

     this.auxTarifasSelect = this.buscarTarifasSedeActual()
    
     console.log(this.auxTarifasSelect[0])
     
  }

  
  buscarEmpleadoLogueado(){
    let aux = new Sesion((this.sesion[0].id),
                          this.sesion[0].idUsuario,
                          this.sesion[0].fechaHoraInicio,
                          this.sesion[0].fechaHoraFin,this.usuarios)

    let usuarioSelect = aux.getEmpleadoEnSesion(this.usuarios)

    return usuarioSelect
  }
  buscarSedeEmpleado(){
    let aux = new Empleado(this.empleado)

    let empleadoSelect = aux.getSedeDondeTrabaja(this.empleado,this.auxUsuariosSelect.idEmpleado)
    return empleadoSelect
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
    if (segundos.length <= 1) {
      segundos = "0" + segundos
    }
    if (minutos.length <= 1) {
      minutos = "0" + minutos
    }
    if (hora.length <= 1) {
      hora = "0" + hora
    }
    horaActual = hora + ":" + minutos + ":" + segundos;
    return horaActual
  }

  buscarTarifasSedeActual(){
    let aux = new Sede(this.sede)
    
    let auxTarifaSelect = []

    auxTarifaSelect = aux.buscarTarifasVigentes(this.sede,this.fechas,this.tarifa,this.auxEmpleadoSelect)
    
    console.log(auxTarifaSelect)

    return auxTarifaSelect

  }

  //-----------------
  tomarSeleccionTarifa(item_id){
    this.pantalla = 'C'
    this.auxTarifaDos = item_id
    console.log(item_id)
    this.auxCantDuracion = this.calcularDuracionEstimadaVisitaCompleta(item_id)
    let cantMaxVisitantes = 0
    let reservaVisitantes = 0
    let cantEntradaSede = 0
    cantMaxVisitantes = this.buscarLimiteVisitantes();
    reservaVisitantes = this.buscarReservasSedeActual();
    cantEntradaSede = this.buscarEntradasSedeActual();
    this.auxCantEntradaDispo = cantMaxVisitantes - (reservaVisitantes + cantEntradaSede)
  }

  calcularDuracionEstimadaVisitaCompleta(item_id){

    let aux = new Sede(this.sede)
    let duracion = aux.esVigente(this.sede,this.fechas,item_id.id,this.exposicion,this.detalleExposicion,this.obra)
    return duracion

  }
  //----------------



  buscarLimiteVisitantes(){
    let aux = new Sede(this.sede)
    let auxLimiteVisitantes = aux.getCantMaxVisitantes(this.sede,this.auxTarifaDos)
    return auxLimiteVisitantes
  }

  buscarReservasSedeActual(){
    let aux = new ReservasVisita()
    let reserva = aux.esSedeActual(this.reservaVisita,this.auxTarifaDos,this.fechas);
    return reserva
  }

  buscarEntradasSedeActual(){
    let aux = new Entrada(0,0,0,0,0,0)
    let countEntrada = aux.esSedeActual(this.auxTarifaDos,this.entrada)
    return countEntrada
  }

  

  tomarSeleccionCantidadEntradas(){
    this.pantalla = 'D'
    for (let index = 0; index < this.auxCantEntradas; index++) {
      //guardar la cantidad de tarifas segun la cantidad seleccionada
      this.auxCantTarifaSelect.push(this.auxTarifaDos)
    }
  }

  tomarConfirmacionVenta(){
    
    let ultimoNumero = this.buscarUltimoNumeroEntrada()
    console.log(ultimoNumero)

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



      const auxEntradaSelect:any= {
        numero:0,
        idSede:this.auxCantTarifaSelect[index].idSede,
        idTarifa:this.auxCantTarifaSelect[index].id,
        fechaVenta:this.fecha(),
        horaVenta:this.hora(),
        monto: precio
      }
        
      //PUT a la base de datos la entrada la cantidad de veces del for de la cantidad seleccionada
      
      
      //guardar en una variable los datos de la entrada de la tarifa seleccionada
      let entradaSelect = new Entrada(ultimoNumero,this.auxCantTarifaSelect[index].idSede,this.auxCantTarifaSelect[index].id,this.fecha(),
                                        this.hora(),precio)
      entradaSelect.new(this._entradaService,auxEntradaSelect) 
      
      //PUT a la base de datos la entrada la cantidad de veces del for de la cantidad seleccionada
      console.log("auxEntradaSelect",entradaSelect)
      
      
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

  buscarUltimoNumeroEntrada(){
    let ultimoNumero = 0
    let aux = new Entrada(0,0,0,0,0,0)
    ultimoNumero = aux.getNumero(this.entrada)
    return ultimoNumero
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

class Sesion {
  id:number;
  idUsuario:number;
  fechaHoraInicio:string;
  fechaHoraFin:string
  
  constructor(id,idUsuario,fechaHoraInicio,fechaHoraFin,usuarios)
  {
    this.id = id,
    this.idUsuario = idUsuario,
    this.fechaHoraInicio = fechaHoraInicio,
    this.fechaHoraFin = fechaHoraFin
  }
  
  getEmpleadoEnSesion(usu){
    let selectUsuario = new Usuario()
    let respUsuario = selectUsuario.conocerEmpleado(this.idUsuario,usu)
    return respUsuario
  }
}

class Usuario {
    id:number;
    nombre:string;
    idEmpleado:number;
    contraseña:string;
    caducidad:string;

  constructor()
  {}
  
  conocerEmpleado(idUsuario,usu){
    
    console.log(idUsuario)
      for (let index = 0; index < usu.length; index++) {
        if(idUsuario == usu[index].id){
          return usu[index]
        }
      }
  }
}

class Empleado{
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

  constructor(empleado:Empleado[]){}

  getSedeDondeTrabaja(empleado,empleado_IdSede){
    for (let index = 0; index < empleado.length; index++) {
      if (empleado_IdSede == empleado[index].id) {
        return empleado[index]
      }
    }
  }



}

class Sede{
  id:number;
  nombre:string;
  cantMaxVisitates:number;
  cantMaxPorGuia:number;

  constructor(sede:Sede[]){}

  buscarTarifasVigentes(sede,fecha,tarifa,empleado_idSede){
    for (let index = 0; index < sede.length; index++) {
      if (empleado_idSede.id == sede[index].id) {
        let auxTarifas = new Tarifa(tarifa)
        console.log(sede[index].id)
        let respTarifa = auxTarifas.esVigente(tarifa,fecha,sede[index].id)
        console.log(respTarifa)
        return respTarifa
        
      }
    }
  }

  esVigente(sede,fecha,tarifa_idSede,exposicion,detalleExposicion,obra){
    for (let index = 0; index < sede.length; index++) {
      if (tarifa_idSede == sede[index].id) {
        let aux = new Exposiciones(exposicion)
        let duracion = aux.buscarDuracionExtendidaObra(fecha,sede[index].id,exposicion,detalleExposicion,obra)
        return duracion
      }
      
    }

  }

  getCantMaxVisitantes(sede,tarifa_select){
    for (let index = 0; index < sede.length; index++) {
      if (tarifa_select.idSede == sede[index].id) {
        return sede[index].cantMaxVisitates
      }
      
    }
    
  }
}

class Tarifa{
  id:number;
  idSede:number;
  idTipoEntrada:number;
  idTipoVisita:number;
  fechaInicioVigencia:string;
  fechaFinVigencia:string;
  monto:number;
  montoAdicionalGuia:number;

  constructor(tarifa:Tarifa[]){}

  esVigente(tarifa,fecha,sede_idSede){
    let dia = parseInt(fecha.slice(0,2))
    let mes = parseInt(fecha.slice(3,5))
    let año = parseInt(fecha.slice(6,10))
    
    let tarifasVigentes:Tarifa[] = []

    for (let index = 0; index < tarifa.length; index++) {

      let diaIn = parseInt(tarifa[index].fechaInicioVigencia.slice(0,2));
      let mesIn = parseInt(tarifa[index].fechaInicioVigencia.slice(3,5));
      let añoIn = parseInt(tarifa[index].fechaInicioVigencia.slice(6,10));

      let diaVen = parseInt(tarifa[index].fechaFinVigencia.slice(0,2))
      let mesVen = parseInt(tarifa[index].fechaFinVigencia.slice(3,5))
      let añoVen =  parseInt(tarifa[index].fechaFinVigencia.slice(6,10))

      if ( (tarifa[index].idSede == sede_idSede) 
      && (añoIn <= año && mesIn <= (mes+1) && diaIn <= dia) && 
        (añoVen >= año && mesVen >= (mes+1) && diaVen >= dia)){
        console.log(tarifa[index])
        
        
        tarifasVigentes.push(tarifa[index])
      }
    }
    return tarifasVigentes

  }
}

class Exposiciones{
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

  constructor(exposicion:Exposiciones){}

  buscarDuracionExtendidaObra(fecha,id,exposicion,detalleExposicion,obra){
    
    let dia = parseInt(fecha.slice(0,2))
    let mes = parseInt(fecha.slice(3,5))
    let año = parseInt(fecha.slice(6,10))

    let resp = 0;

    for (let index = 0; index < exposicion.length; index++) {

      //Guardar el dia inicio, mes inicio, año inicio de la exposicion
      let diaIn = parseInt(exposicion[index].fechaInicio.slice(0,2))
      let mesIn = parseInt(exposicion[index].fechaInicio.slice(3,5))
      let añoIn = parseInt(exposicion[index].fechaInicio.slice(6,10))
      
      //Guardar el dia fin, mes fin, año fin de la exposicion
      let diaVen = parseInt(exposicion[index].fechaFin.slice(0,2))
      let mesVen = parseInt(exposicion[index].fechaFin.slice(3,5))
      let añoVen = parseInt(exposicion[index].fechaFin.slice(6,10))

      if ((id == exposicion[index].idSede) && 
          (añoIn <= año && mesIn <= mes && diaIn <= dia) && 
          (añoVen >= año && mesVen >= mes  && diaVen >= dia))
      {
        let aux = new DetalleExposicion(detalleExposicion)
        resp = resp + aux.getDuracionExtendida(exposicion[index].id,detalleExposicion,obra)
        
      }
    }
    return resp
  }
}

class DetalleExposicion{
  id:number;
  idExposicion:number;
  idObra:number;
  lugarAsignado:string;

  constructor(detalleExposicion:DetalleExposicion){}

  getDuracionExtendida(expo_id,detalleExpo,obra){
    let duracion = 0
    for (let index = 0; index < detalleExpo.length; index++) {
      if (expo_id == detalleExpo[index].idExposicion){
        let aux = new Obra(obra)
        duracion = duracion + aux.getDuracion(detalleExpo[index].idObra,obra)
        console.log(duracion)
      }
    }
    return duracion
  }
}

class Obra{
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

  constructor(obra:Obra){}

  getDuracion(detalle_idObra,obra){
    let cantDuracion = 0
    for (let index = 0; index < obra.length; index++) {
      if (detalle_idObra == obra[index].id) {
        console.log(obra[index])
        cantDuracion = cantDuracion + obra[index].duracionExtendida
        
      }
    }
    return cantDuracion
  }
}

class ReservasVisita{
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

  constructor(){}

  esSedeActual(reservaVisita,sede,fecha){
    let countReserva = 0

    let dia = parseInt(fecha.slice(0,2))
    let mes = parseInt(fecha.slice(3,5))
    let año = parseInt(fecha.slice(6,10))
    
    for (let index = 0; index < reservaVisita.length; index++) {

      let diaIn = parseInt(reservaVisita[index].fechaHoraReserva.slice(0,2))
      let mesIn = parseInt(reservaVisita[index].fechaHoraReserva.slice(3,5))
      let añoIn = parseInt(reservaVisita[index].fechaHoraReserva.slice(6,10))
      if (sede.id == reservaVisita[index].idSede && 
        (añoIn == año && mesIn == mes && diaIn == dia) ) {
        
        countReserva += 1
      }
    }

    return countReserva
  }
}

class Entrada{
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

  esSedeActual(sede,entrada){
    let contEntrada = 0
    for (let index = 0; index < entrada.length; index++) {
      if (sede.id == entrada[index].idSede) {
        contEntrada += 1
      }
    }
    return contEntrada
  }

  getNumero(entrada){
    let auxCont = entrada.length
    return auxCont
  }

  new(_entradaService,entradaSelect){

    _entradaService.guardarEntrada(entradaSelect).subscribe(data =>{
      console.log(data)
    })
  }
}






