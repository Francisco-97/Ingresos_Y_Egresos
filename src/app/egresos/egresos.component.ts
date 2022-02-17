import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  constructor(private _egresosServicios:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this._egresosServicios.egreso
  }

  EliminarRegistro(egreso:Egreso){
    this._egresosServicios.Eliminar(egreso);
  }

  CalcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal; 
  }
}
