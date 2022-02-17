import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",13000),
        new Ingreso("Venta",500)
    ];

    Eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1)
    }
}