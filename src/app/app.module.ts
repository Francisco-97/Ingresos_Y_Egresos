import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingresos/ingreso.service';
import { EgresoServicio } from './egresos/egreso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresosComponent,
    EgresosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [IngresoServicio,EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
