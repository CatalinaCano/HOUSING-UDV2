export class Administrador {

    constructor(
        public email: string,
        public role: string = 'ADMINISTRADOR',
        public _id: string
    ) { }
}
