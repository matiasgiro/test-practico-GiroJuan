import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {BusquedaComponent} from '../busqueda/busqueda.component';
import {DetalleComponent} from '../detalle/detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'items/:search', component: BusquedaComponent},
  { path: 'detalle/:id', component: DetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
