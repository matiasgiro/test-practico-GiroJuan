import {Component, Output} from '@angular/core';
import construct = Reflect.construct;
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-practico';
  search = '';
  constructor( private route: Router,
               private spinner: NgxSpinnerService) {
  }
  onNotify(message: string): void {
    this.search = message;
    this.route.navigate(['items/', message]);
  }
}
