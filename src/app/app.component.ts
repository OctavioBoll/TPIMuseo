import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CU102RegistrarEntradas';

  //Variables para guardar las tablas de las funciones obtener()
  sesion: Sesion[] = [];
  usuarios: Usuario[] = [];
  empleado: Empleado[] = [];
  sede: Sede[] = [];
  tarifa: Tarifa[] = [];
  tipoEntrada: TipoEntrada[] = [];
  tipoVisita: TipoVisita[] = [];
  exposicion: Exposiciones[] = [];
  detalleExposicion: DetalleExposicion[] = [];
  obra: Obra[] = [];
  reservaVisita: ReservasVisita[] = [];
  entrada: Entrada[] = [];

  
  
  //variables usadas para comunicar con el HTML
  auxSedeSelect: Sede[] = [];
  auxTarifaDos: Tarifa[] = [];
  auxCantTarifaSelect: any[] = [];
  auxCantDuracion = 0;
  auxCantEntradaDispo = 0;
  auxCantEntradas = 0;
  guia_select = false;
  auxTarifasSelect: any;
  fechas = "";
  horas = "";

  //pantalla empieza en A Primera pantalla
  pantalla = 'A'

  

  constructor(private _sesionService: SesionService,
    private _usuarioService: UsuarioService,
    private _empleadoService: EmpleadoService,
    private _sedeService: SedeService,
    private _tarifasService: TarifaService,
    private _tipoEntradaService: TipoEntradaService,
    private _tipoVisitaService: TipoVisitaService,
    private _exposicionService: ExposicionService,
    private _detalleExposicionService: DetalleExposicionService,
    private _obraService: ObraService,
    private _reservaVisitaService: ReservaVisitaService,
    private _entradaService: EntradaService,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    //al cargar la pagina se Obtiene las tablas una por una 
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
  }

  //funciones para traer las tablas del SQL por la Api
  obtenerSesiones() {
    this._sesionService.getEmpleadoEnSesion().subscribe(data => {
      this.sesion = data

    })
  }
  obtenerUsuarios() {
    this._usuarioService.getListUsuario().subscribe(data => {
      this.usuarios = data

    })
  }
  obtenerEmeplado() {
    this._empleadoService.getListEmpleado().subscribe(data => {
      this.empleado = data
    })
  }
  obtenerSede() {
    this._sedeService.getListSedes().subscribe(data => {
      this.sede = data;
    })
  }
  obtenerTarifa() {
    this._tarifasService.getListTarifa().subscribe(data => {
      this.tarifa = data;
    })
  }
  obtenerTipoEntrada() {
    this._tipoEntradaService.getListTipoEntrada().subscribe(data => {
      this.tipoEntrada = data;
    })
  }
  obtenerTipoVisita() {
    this._tipoVisitaService.getListTipoVisita().subscribe(data => {
      this.tipoVisita = data;
    })
  }
  obtenerExposicion() {
    this._exposicionService.getListExposicion().subscribe(data => {
      this.exposicion = data;
    })
  }
  obtenerDetalleExposicion() {
    this._detalleExposicionService.getListDetalleExposicion().subscribe(data => {
      this.detalleExposicion = data;
    })
  }
  obtenerObra() {
    this._obraService.getListObra().subscribe(data => {
      this.obra = data;
    })
  }
  obtenerReservaVisita() {
    this._reservaVisitaService.getListReservaVisita().subscribe(data => {
      this.reservaVisita = data;
    })
  }
  obtenerEntrada() {
    this._entradaService.getListEntrada().subscribe(data => {
      this.entrada = data;
    })
  }


  //Al apretar el boton "Regitrar nueva venta de entrada"
  nuevaVentaEntrada() {
    
    //cambia a la pantalla "B" donde muestra todas las tarifas
    this.pantalla = 'B'
    
    //variables usadas para recuperar los datos de las funciones
    let auxUsuario_IdEmpleado = 0
    let auxSede_Id = 0

    //busca el empleado logeado
    auxUsuario_IdEmpleado = this.buscarEmpleadoLogueado();

    //con el IdEmpleado de la clase Usuario se lo paso por parametro para buscar la ID sede
    auxSede_Id = this.buscarSedeEmpleado(auxUsuario_IdEmpleado);

    //trae la fecha Actual
    this.fechas = this.fecha()
    
    //guardar todas las tarifas vigentes de la Sede y los guarda todos
    // en el Arreglo auxTarifaSelect
    this.auxTarifasSelect = this.buscarTarifasSedeActual(auxSede_Id)

  }


  buscarEmpleadoLogueado() {
    //el empleado logeado es el de la posicion 0 de la tabla Sesion
    //crea la clase Sesion con los datos de la posicion 0
    let nuevaSesion = new Sesion(this.sesion[0].id,
      this.sesion[0].idUsuario,
      this.sesion[0].fechaHoraInicio,
      this.sesion[0].fechaHoraFin,
      this.usuarios)

    //con los datos ingresados a la clase se usa la funcion para traer el ID_empleado
    //de la clase Usuario
    let usuarioSelect = nuevaSesion.getEmpleadoEnSesion()
    return usuarioSelect
  }

  //buscar el empleado que tenga el ID igual a IDEmpleado del usuario
  buscarSedeEmpleado(Usuario_IdEmpleado) {
    for (let index = 0; index < this.empleado.length; index++) {
      if (this.empleado[index].id === Usuario_IdEmpleado) {
        let nuevoEmpleado = new Empleado(this.empleado[index].id,
          this.empleado[index].idSede,
          this.empleado[index].apellido,
          this.empleado[index].codigoValidacion,
          this.empleado[index].cuit,
          this.empleado[index].dni,
          this.empleado[index].domicilio,
          this.empleado[index].fechaIngreso,
          this.empleado[index].fechaNacimiento,
          this.empleado[index].mail,
          this.empleado[index].sexo,
          this.empleado[index].telefono)
        
          //Busca Trae el IDSede donde te trabaja el empleado
        let auxSede_Id = nuevoEmpleado.getSedeDondeTrabaja()
        return auxSede_Id
      }
      
    }

  }

  //funcion para traer la fecha como cadena en string 
  fecha() {
    var fecha = new Date()
    var fechaActual = ""
    var dia = fecha.getDate().toString();
    var mes = (fecha.getMonth() + 1).toString();
    var año = fecha.getFullYear().toString();
    if (dia.length <= 1) {
      dia = "0" + dia
    }
    if (mes.length <= 1) {
      mes = "0" + mes
    }
    fechaActual = dia + "/" + mes + "/" + año;
    return fechaActual
  }

  //funcion para traer la hora como cadena en string 
  hora() {
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


  //buscar tarifas vigentes de la sede actual
  buscarTarifasSedeActual(auxSede_Id) {
    
    //variable para guardar las tarifas vigentes
    let auxTarifaSelect

    //buscar en el arreglo de todas la sedes la que tenga id igual a la auxsede_id 
    //pasada por parametro
    for (let index = 0; index < this.sede.length; index++) {
      if (this.sede[index].id == auxSede_Id) {
        let sedeActual = new Sede(this.sede[index].id,
                                  this.sede[index].nombre,
                                  this.sede[index].cantMaxVisitates,
                                  this.sede[index].cantMaxPorGuia,
                                  this.tarifa,
                                  this.exposicion)

        //guarda la sede seleccionada en una varibale global para usarlas despues
        this.auxSedeSelect.push(sedeActual)
        
        //guardar las tarifas vigentes de la sede pasandole la fecha como parametro
        auxTarifaSelect = sedeActual.buscarTarifasVigentes(this.fechas)
      }
    }
    return auxTarifaSelect
  }

  //cuando se selecciona en HTML la tarifa que elige
  tomarSeleccionTarifa(item_id) {

    //la pantalla "C" detalle de la tarifa seleccionada
    this.pantalla = 'C'

    //variables para calcular la cantidad de entradas disponibles
    let cantMaxVisitantes = 0
    let reservaVisitantes = 0
    let cantEntradaSede = 0

    //se lo paso para que se pueda mostrar en el HTML
    this.auxTarifaDos = item_id

    //usar una variable global auxCantDuracion para usarlo en el HTML
    this.auxCantDuracion = this.calcularDuracionEstimadaVisitaCompleta()
    
    //traer la cantidad de visitantes y reservas
    cantMaxVisitantes = this.buscarLimiteVisitantes();
    reservaVisitantes = this.buscarReservasSedeActual();
    cantEntradaSede = this.buscarEntradasSedeActual();

    //usar una variable global auxCantEntradaDispo para usarla en el HTML
    this.auxCantEntradaDispo = cantMaxVisitantes - (reservaVisitantes + cantEntradaSede)
  }

  calcularDuracionEstimadaVisitaCompleta() {

    //usar la variable de auxSedeSelect que tiene la sede seleccionada en el posicion 0
    let actualSede = new Sede(this.auxSedeSelect[0].id,
                              this.auxSedeSelect[0].nombre,
                              this.auxSedeSelect[0].cantMaxVisitates,
                              this.auxSedeSelect[0].cantMaxPorGuia,
                              this.auxTarifaDos,
                              this.exposicion)

    //buscar la duracion de la obra de la sede con exposicion vigente 
    let duracion = actualSede.esVigente(this.fechas, this.detalleExposicion, this.obra)

    return duracion

  }

  //buscar limite maximo de visitantes de la sede seleccionada por dia 
  buscarLimiteVisitantes() {
    let actualSede = new Sede(this.auxSedeSelect[0].id,
                              this.auxSedeSelect[0].nombre,
                              this.auxSedeSelect[0].cantMaxVisitates,
                              this.auxSedeSelect[0].cantMaxPorGuia,
                              this.auxTarifaDos,
                              this.exposicion)

    let auxLimiteVisitantes = actualSede.getCantMaxVisitantes()

    return auxLimiteVisitantes
  }

  //buscar la reservas de la sede con la fecha de hoy
  buscarReservasSedeActual() {

    let fechaActual: any;
    let fechaReserva: any;
    let reserva = 0

    fechaActual = this.fechas.slice(6, 10) + this.fechas.slice(3, 5) + this.fechas.slice(0, 2)
    fechaActual = parseInt(fechaActual)

    for (let index = 0; index < this.reservaVisita.length; index++) {
      let reservaActual = new ReservasVisita(this.reservaVisita[index].id,
        this.reservaVisita[index].numero,
        this.reservaVisita[index].idExposicion,
        this.reservaVisita[index].idSede,
        this.reservaVisita[index].idEmpleadoCreador,
        this.reservaVisita[index].cantidadAlumno,
        this.reservaVisita[index].cantidadAlumnoConfirmado,
        this.reservaVisita[index].fechaHoraCreacion,
        this.reservaVisita[index].fechaHoraReserva,
        this.reservaVisita[index].horaInicioReal,
        this.reservaVisita[index].horaFinReal)

      fechaReserva = this.reservaVisita[index].fechaHoraReserva.slice(6, 10) +
        this.reservaVisita[index].fechaHoraReserva.slice(3, 5) +
        this.reservaVisita[index].fechaHoraReserva.slice(0, 2)

      fechaReserva = parseInt(fechaReserva)

      if (fechaActual === fechaReserva) {
        reserva = reserva + reservaActual.esSedeActual(this.auxSedeSelect[0].id);
      }
    }

    return reserva
  }

  //buscar las entradas vendidas de sede en el dia de hoy
  buscarEntradasSedeActual() {

    let fechaActual: any;
    let fechaVentaEntrada: any;
    let countEntrada = 0
    
    fechaActual = this.fechas.slice(6, 10) + this.fechas.slice(3, 5) + this.fechas.slice(0, 2)
    fechaActual = parseInt(fechaActual)

    for (let index = 0; index < this.entrada.length; index++) {
      let auxEntradas = new Entrada(this.entrada[index].numero,
                                    this.entrada[index].idSede,
                                    this.entrada[index].idTarifa,
                                    this.entrada[index].fechaVenta,
                                    this.entrada[index].horaVenta,
                                    this.entrada[index].monto)

      fechaVentaEntrada = this.entrada[index].fechaVenta.slice(6, 10) +
                          this.entrada[index].fechaVenta.slice(3, 5) +
                          this.entrada[index].fechaVenta.slice(0, 2)

      fechaVentaEntrada = parseInt(fechaVentaEntrada)
      if (fechaActual === fechaVentaEntrada) {
        auxEntradas.esSedeActual(this.auxSedeSelect[0].id)

        if (auxEntradas.esSedeActual(this.auxSedeSelect[0].id) === true) {
          countEntrada = countEntrada + 1
        }
      }
    }
    return countEntrada
  }


  //cuando se apreta el boton aceptar se toma la cantidad de entradas 
  //que desea y mostrar el Detalle de la entrada
  tomarSeleccionCantidadEntradas() {
    this.pantalla = 'D'
    for (let index = 0; index < this.auxCantEntradas; index++) {
      
      //guardar la cantidad de tarifas segun la cantidad seleccionada
      this.auxCantTarifaSelect.push(this.auxTarifaDos)
    }
  }

  //al apretar el aceptar en el detalle de entrada confirma la entrada  
  tomarConfirmacionVenta() {

    //buscar el ultimo numero de las entradas vendidas
    let ultimoNumero:number = this.buscarUltimoNumeroEntrada()
    

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
      let auxEntradaDos = new Entrada(ultimoNumero,
                                      parseInt(this.auxCantTarifaSelect[index].idSede),
                                      parseInt(this.auxCantTarifaSelect[index].id),
                                      this.fecha(),
                                      this.hora(),
                                      precio)
     
       let ventaEntrada= auxEntradaDos.new(this._entradaService)
      
       //cartel de entrada vendida correctamente 
      if (  ventaEntrada = 1) {
        swal.fire("Entrada Vendida", "Se vendio correctamente la entrada", "success");
      }
      //cartel de que la entrada no fue vendida
      else{
        swal.fire("Error al vender la entrada", "No se pudo vender la entrada", "error");
      }
      
    }
    
    //volver todas las variables a cero por si quiere volver a comprar entradas
    this.auxCantTarifaSelect = [];
    this.auxCantEntradas = 0;
    this.auxTarifaDos = []
    this.auxCantDuracion = 0;
    this.auxCantEntradaDispo = 0;
    this.guia_select = false;

    //volver a la pantalla de tarifas
    this.pantalla = "B"

  }

  //buscar el ultimo numero 
  buscarUltimoNumeroEntrada() {
    let auxUltimoNumero = []
    for (let index = 0; index < this.entrada.length; index++) {

      let precio = this.entrada[index].monto
      
      let entradaNro = new Entrada(this.entrada[index].numero,
                                          this.entrada[index].idSede,
                                          this.entrada[index].idTarifa,
                                          this.entrada[index].fechaVenta,
                                          this.entrada[index].horaVenta,
                                          precio)
    
      auxUltimoNumero.push(entradaNro.getNumero(this.auxSedeSelect[0].id)) 
    }
    let ultimoNumero = Math.max(...auxUltimoNumero)
    return ultimoNumero
  }

  //boton para volver a las tarifas y poner las variables a cero
  VolverATarifas() {
    this.pantalla = "B"
    this.auxCantTarifaSelect = [];
    this.auxCantEntradas = 0;
    this.auxTarifaDos = []
    this.auxCantDuracion = 0;
    this.auxCantEntradaDispo = 0;
    this.guia_select = false;

  }

  //funcion para el checkbox de guia 
  GuiaSelect() {
    if (this.guia_select == true) {
      this.guia_select = false

    }
    else {
      this.guia_select = true
    }
  }

}











