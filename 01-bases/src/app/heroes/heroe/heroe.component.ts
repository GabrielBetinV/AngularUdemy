import { Component } from "@angular/core";


@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'


})
export class HeroeComponent{

 nombre: string = 'Iroman';
 edad: number = 45

 // Creamos una funcion que retorno el nombre
 obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
 }

 // Metodo get de la clase

 get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
 }

// Creamos un metodo para cambiar la edad

cambiarNombre():void {
    this.nombre = 'Spiderman'
}


// Creamos un metodo para cambiar de nombre

cambiarEdad():void {
    this.edad =  30

    }


    resetForm(){
        this.nombre = 'Iroman';
        this.edad =  45;
    }

}