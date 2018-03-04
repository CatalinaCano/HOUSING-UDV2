export class Estudiante {

    constructor(
        public email: string,
        public sobreMi: string,
        public perteneceA: string,
        public role: string = 'ESTUDIANTE',
        public _id: string
    ) { }

}
