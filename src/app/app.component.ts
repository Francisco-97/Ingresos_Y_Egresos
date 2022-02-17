import { Component } from '@angular/core';
import { Egreso } from './egresos/egreso.model';
import { EgresoServicio } from './egresos/egreso.service';
import { Ingreso } from './ingresos/ingreso.model';
import { IngresoServicio } from './ingresos/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private _ingresosServicios:IngresoServicio, private _egresosServicios:EgresoServicio){
    this.ingresos = this._ingresosServicios.ingresos;
    this.egresos = this._egresosServicios.egreso;
  }

  getIngresosTotal(){
    let IngresosTotal:number=0;
    this.ingresos.forEach(ingreso => {
      IngresosTotal += ingreso.valor
    });
    return IngresosTotal
  }

  getEgresosTotal(){
    let EgresosTotal:number=0;
    this.egresos.forEach( egreso =>{
      EgresosTotal += egreso.valor;
    });
    return EgresosTotal
  }

  getPorcentajeTotal(){
    return this.getEgresosTotal()/this.getIngresosTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresosTotal()-this.getEgresosTotal();
  }
}
