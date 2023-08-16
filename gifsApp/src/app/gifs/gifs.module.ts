import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GisfPageComponent } from './gisf-page/gisf-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GisfPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GisfPageComponent
  ]
 
})
export class GifsModule { }
