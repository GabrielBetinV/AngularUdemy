import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  /* API de  Giphy*/

  private apiKey: string = 'LlYVN50n2XLEXbcTERV7h7VFt3T2FPzt'

  constructor() { }

 /*Variable encapsaulada del historial*/ 
private _historial: string[] = [];

/*  get de la variable*/
get historial(){  
  return [...this._historial]
}


/*Metodo que guarda el historial */
buscarGifs( query: string){
  /* Convertimos los valores en minuscula */
  query = query.trim().toLocaleLowerCase();

  //Condicionamos al valor si existe en el arreglo,no lo vuelva a guardar
  if(!this._historial.includes(query)) {
    // Almacena el nuevo valor al arreglo
    this._historial.unshift(query)
    // Corta el arreglo hasta 10 valores maximo
    this._historial = this._historial.splice(0,10);
  } 
 
  console.log(this._historial)
}


}
