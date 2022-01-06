export interface PresupuestoInterfaz {
    nombre: String;
    nomPresupuesto: String;
    servicio: string | string[];
    precio: number;
    data: Date;

}

export class Presupuesto implements PresupuestoInterfaz {

    data: Date;
    
    constructor(public nombre: String, public nomPresupuesto: String,
        public servicio: string | string[], public precio: number) {
        this.data = new Date(Date.now());
        
        }
}


