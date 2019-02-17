import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ConsultasService} from '../shared/consultas.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  items: any = [];
  search: string = '';

  constructor(private route: ActivatedRoute,
              private consultaService: ConsultasService,
              private spinner: NgxSpinnerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.search = params.get('search');
      this.consultar();
    });
  }
  consultar() {
    this.spinner.show();
      this.consultaService.obtenerItems(this.search).subscribe(res =>{
        this.spinner.hide();
        this.items = res.items;
      });
  }
  detalle(id) {
    this.router.navigate(['detalle/', id]);
  }

}
