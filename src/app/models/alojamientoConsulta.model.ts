import { Estudiante } from './estudiante.model';
import { Administrador } from './administrador.model';
export class AlojamientoConsulta {

    constructor(
        public estudiante:  Estudiante,
        public propiedadesAlojamiento: {
            estadoAlojamiento: string,
            estadoPublicacionAlojamiento: string,
            descripcionAlojamiento: string,
            clastringficacionAlojamiento: string,
            fechaPublicacionAlojamiento: string
        },
        public ubicacion: {
            latitud: number,
            longitud: number,
            zona: string
        },
        public imagenes: {
            imgSala: File,
            imgBanio: File,
            imgCocina: File,
            imgHabitacion: File,
            imgFachada: File
        },
        public mascota: {
            habitaMascota: string
        },
        public normasAlojamiento: {
            horaLlegada: string,
            franjaLlegada: string,
            accesoOtrasPersonas: string,
            fiestasEventos: string,
            nivelVolumen: string,
            ritosExorcismosOrgias: string,
            permiteConsumoAlcohol: string,
            permiteConsumoDrogas: string
        },
        public transporte: {
            publico: string,
            bicicleta: string,
            taxi: string,
            caminando: string,
            metro: string,
            uber: string
        },
        public lugaresCercanos: {
            centrosComerciales: string,
            museos: string,
            restaurantes: string,
            bares: string,
            iglestringas: string,
            hospitales: string,
            teatros: string,
            parques: string,
            zonasComerciales: string,
            zonasCulturales: string,
            gimnastringo: string
        },
        public servicios: {
            internet: string,
            computador: string,
            televistringon: string,
            videoJuegos: string,
            serviciosPublicos: string,
            aguaCaliente: string,
            alimentacionIncluida: string,
            aseoHabitacion: string,
            lavadoRopa: string,
            lavadora: string,
            accesoLlaves: string,
            electrodomesticos: string,
            banioPrivado: string,
            tipoCama: string,
            electrodomesticosDeCocina: string,
            alarma: string,
            guardaRopa: string
        },
        public componentes: {
            numeroHabitaciones: string,
            cantidadBanios: string,
            accesoCocina: string,
            espacioEstudio: string,
            sePermiteFumar: string,
            espacioAireLibre: string,
            accesoSala: string
            },
        public costumbres: {
            habitosAlimenticios: string,
            consumoDrogas: string,
            consumoAlcohol: string
            },
        public tipoVivienda: string,
        public tipoHabitacion: string,
        public sedeCercana: string,
        public administrador?: Administrador,
    ) {}

}
