import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /* Injecto el servicio */
  constructor(private gifsService:GifsService) { }

  /* Realizo un get para capturar los datos del servicio */

  get historial(){
    return this.gifsService.historial;
  }

  ngOnInit(): void {
  }

}
