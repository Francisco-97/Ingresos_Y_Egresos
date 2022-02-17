import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egreso:Egreso[]=[
        new Egreso("Renta Depto",5500),
        new Egreso("Pasaje",400)
    ];

    Eliminar(egreso:Egreso){
        const indice:number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice,1);
    }
}