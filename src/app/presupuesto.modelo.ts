export interface PresupuestoInterfaz {
    nombre: String;
    nomPresupuesto: String;
    servicios: string[];
    precio: number;
    data: string;

}

export class Presupuesto implements PresupuestoInterfaz {

    fecha: Date;
    data: string;

    
    constructor(public nombre: String, public nomPresupuesto: String,
        public servicios: string[], public precio: number) {
        this.fecha = new Date(Date.now());
        this.data = this.fecha.getDate() + "." + (this.fecha.getMonth()+1) + "." + this.fecha.getFullYear();
        
    }
    
}


