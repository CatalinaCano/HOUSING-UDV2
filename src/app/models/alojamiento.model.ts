import { Estudiante } from './estudiante.model';
import { Administrador } from './administrador.model';
export class Alojamiento {

    constructor(
        public estudiante:  Estudiante,
        public tipoVivienda: string,
        public descripcionAlojamiento: string,
        public tipoHabitacion: string,
        public clasificacionAlojamiento: string,
        public estadoAlojamiento: string = 'Disponible',
        public estadoPublicacionAlojamiento: string = 'En estudio',
        public fechaPublicacionAlojamiento: string,
        public sedeCercana: string,
        public hospedanA: string,
        public latitud: number,
        public longitud: number,
        public zona: string,
        public imgSala: File,
        public imgBanio: File,
        public imgCocina: File,
        public imgHabitacion: File,
        public imgFachada: File,
        public habitaMascota: string,
        public horaLlegada: string,
        public franjaLlegada: string,
        public accesoOtrasPersonas: string,
        public fiestasEventos: string,
        public nivelVolumen: string,
        public ritosExorcismosOrgias: string,
        public permiteConsumoAlcohol: string,
        public permiteConsumoDrogas: string,
        public publico: string,
        public bicicleta: string,
        public taxi: string,
        public caminando: string,
        public metro: string,
        public uber: string,
        public centrosComerciales: string,
        public museos: string,
        public restaurantes: string,
        public bares: string,
        public iglesias: string,
        public hospitales: string,
        public teatros: string,
        public parques: string,
        public zonasComerciales: string,
        public zonasCulturales: string,
        public gimnasio: string,
        public internet: string,
        public computador: string,
        public television: string,
        public videoJuegos: string,
        public serviciosPublicos: string,
        public aguaCaliente: string,
        public alimentacionIncluida: string,
        public aseoHabitacion: string,
        public lavadoRopa: string,
        public servicioTvCable: string,
        public lavadora: string,
        public accesoLlaves: string,
        public electrodomesticos: string,
        public banioPrivado: string,
        public tipoCama: string,
        public electrodomesticosDeCocina: string,
        public alarma: string,
        public guardaRopa: string,
        public numeroHabitaciones: string,
        public cantidadBanios: string,
        public accesoCocina: string,
        public espacioEstudio: string,
        public sePermiteFumar: string,
        public espacioAireLibre: string,
        public accesoSala: string,
        public habitosAlimenticios: string,
        public consumoDrogas: string,
        public consumoAlcohol: string,
        public administrador?: Administrador,
    ) {}

}
