import  {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
        template: `
        <h1>Hola Mundo</h1>

        <h1>{{title}}</h1>

        <h3><strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">  + {{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)"> - {{base}}</button>
            `

})


export class ContadorComponente{

    public title:string = 'bases';
    public numero:number = 0;// Inicializamos una variable en 0
    public base:number = 2;
  
  
     acumular( valor:number){
      this.numero += valor
     }
  
}