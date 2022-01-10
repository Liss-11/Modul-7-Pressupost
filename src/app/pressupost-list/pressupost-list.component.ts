
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
  original: Presupuesto[] = [];
  alfabeto: boolean;
  pordata: boolean;
  origin: boolean;


  ngOnInit(): void {

  
    this.original = this.TotalServicio.presupuestos;
    this.presupuestos = this.original;

    this.alfabeto = false;
    this.pordata = false;
    this.origin = false;
    

    this.TotalServicio.original$.subscribe(() => {

      if (this.origin) {
        this.incial();
      } else if (this.alfabeto) {
        this.alfabetico();
      } else if (this.pordata) {
        this.porData();
      }

    });
      
    

  }

  //Orden INICIAL

  incial(): void {

    this.presupuestos = this.original;
    this.origin = true;
    this.pordata = false;
    this.alfabeto = false;
  
  }

  //Orden Alfabético

  alfabetico(): void {
    let alfabeticos: Presupuesto[] = this.original.map((elem) => {
      elem.nombre.toLowerCase;
      return elem;
    });
      
    function ordena(x: Presupuesto, y: Presupuesto) {

      return x.nombre.localeCompare(y.nombre);
}
    this.presupuestos = alfabeticos.sort(ordena);
    this.alfabeto = true;
    this.pordata = false;
    this.origin = false;
  
  }
  
  //Ordenamos por DATA

  porData(): void{
    let porData: Presupuesto[] = this.original;

    function ordena(x: Presupuesto, y: Presupuesto) {

      return x.data.localeCompare(y.data, "en", { sensitivity: 'base' });
    }
    this.presupuestos = porData.sort(ordena);
    this.pordata = true;
    this.origin = false;
    this.alfabeto = false;

  
  }


}
