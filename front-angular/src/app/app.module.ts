import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from '../shared/shared.module';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {HomeModule} from '../home/home.module';
import {BusquedaComponent} from '../busqueda/busqueda.component';
import {DetalleComponent} from '../detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BusquedaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
