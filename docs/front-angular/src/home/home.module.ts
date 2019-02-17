import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
