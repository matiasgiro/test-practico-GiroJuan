import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ConsultasService} from "../shared/consultas.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: any = '';
  public detalle;
  constructor(private route: ActivatedRoute,
              private consultaService: ConsultasService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.spinner.show();
      this.id = params.get('id');
      this.consultar();
    });
  }
  consultar() {
    this.consultaService.obtenerItem(this.id).subscribe(res => {
      this.spinner.hide();
      this.detalle = res;
    });
  }

}
