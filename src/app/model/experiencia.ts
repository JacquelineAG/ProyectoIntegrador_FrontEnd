export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaE : string;
    tareasE: string;

    constructor(nombreE: string, descripcionE: string, fechaE: string, tareasE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaE = fechaE;
        this.tareasE = tareasE;
    }
}