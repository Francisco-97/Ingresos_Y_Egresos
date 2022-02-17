import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingreso:Ingreso[]=[];
  constructor(private _IngresosServicios:IngresoServicio) { }

  ngOnInit(): void {
    this.ingreso = this._IngresosServicios.ingresos
  }

  EliminarRegistro(ingreso:Ingreso){
    this._IngresosServicios.Eliminar(ingreso)
  }
}
