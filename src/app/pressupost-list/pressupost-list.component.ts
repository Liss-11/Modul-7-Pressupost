import { Component, OnInit } from '@angular/core';
import { CalculaTotalService } from '../calcula-total.service';
import { Presupuesto } from '../presupuesto.modelo';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {

  constructor(private TotalServicio: CalculaTotalService) { }

  presupuestos: Presupuesto[] = [];
  servicios: string[] = [];

  ngOnInit(): void {

    this.presupuestos = this.TotalServicio.presupuestos;
    

  }

}
