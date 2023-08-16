import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {


//Recibe el nuevo del main-page
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }  

  
// Creamos el constructor con el servicio  
constructor( private dbzService: DbzService){}



  // Para ENviar el nuevo personaje
  //@Output() onNUevoPersonaje: EventEmitter<Personaje>= new EventEmitter<Personaje>();

  agregar(){
    // Validamos si el texbox no trae datos,no imprima nada en consola
    if ( this.nuevo.nombre.trim().length ===0) {
      return;
}


  // Desde aqui lo enviamos
  //this.onNUevoPersonaje.emit(this.nuevo)
  this.dbzService.agregarPersonaje(this.nuevo);


  // Limpiamos las cajas de texto
  this.nuevo = {
    nombre: '',
    poder: 0
  }

 }

}
