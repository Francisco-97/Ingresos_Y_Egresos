import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoServicio } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoServicio } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ing";
  descripcionInput:string;
  valorInput:number
  constructor(private _ingresoServicio:IngresoServicio, private _egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  TipoSelector(evento:any){
  this.tipo = evento.target.value
  }

  AgregarTipo(){
    if(this.tipo === "ing"){
      this._ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput))
    }else{
      this._egresoServicio.egreso.push(new Egreso(this.descripcionInput,this.valorInput))
    }
  }
}
