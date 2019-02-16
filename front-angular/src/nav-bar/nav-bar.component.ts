import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  busqueda: string = '';
  constructor() {
  }

  ngOnInit() {
  }
  consultar() {
    if(this.busqueda){
      this.notify.emit(this.busqueda);
    }
  }

}
