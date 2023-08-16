import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

/* Busca datos en las etiquetas HTML */  
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

/* Injectamos el servicio */
constructor( private gifsService: GifsService){}

  buscar(){

    /* Almacenamos el valor de la caja de texto */
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    /* Borra los atos  caja de texto */
    this.txtBuscar.nativeElement.value = ''

    /* Utilizamoss el servicio */
    this.gifsService.buscarGifs(valor)
  }

  ngOnInit(): void {
  }

}
