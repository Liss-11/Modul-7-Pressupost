import { EventEmitter, Injectable } from '@angular/core';
import { Presupuesto } from './presupuesto.modelo';

@Injectable({
  providedIn: 'root'
})
export class CalculaTotalService {

  paginas$ = new EventEmitter<string>();
  idiomas$ = new EventEmitter<string>();
  aumento1$ = new EventEmitter<number>();
  aumento2$ = new EventEmitter<number>();



  total: number = 0;
  aumentar: number = 30;
  paginas: number = 1;
  idiomas: number = 1;
 

  constructor() { }

  //listado de presupuestos

  presupuestos: Presupuesto[] = [];

  //calcula el precio del TOTAL en funcion del n de páginas y de idiomas, del opcion web

  aumento = (pag:number, idiom: number) => {
    return pag * idiom * 30;
    
  };
  
  //devuelve el total si operamos des del el Subformulario

  totalWeb = (aumentar: number, seo: boolean, campanya: boolean) => {
    let miSeo: number = 0;
    let miCampanya: number = 0;
    
    if (seo) miSeo = 300;
    if (campanya) miCampanya = 200;
    
    this.total = 500 + aumentar + miSeo + miCampanya;
    this.aumentar = aumentar;

    return this.total;
    
  }
  //Recibe parámetros del componente INPUT y manda la respuesta directamente al Home
  recibeParámetro(nombre: string, valor: number):void {

    if (nombre === "paginas") {

      this.paginas = valor;

      this.aumentar = this.aumento(this.paginas, this.idiomas);
      this.aumento1$.emit(this.aumentar);
    
    } else if (nombre === "idiomas")
      this.idiomas = valor;

      this.aumentar = this.aumento(this.paginas, this.idiomas);
      this.aumento2$.emit(this.aumentar);
  }

  
  /* calculaTotal(total: number, change: boolean, nombre:string) {

    if (change) {

      nombre === 'web'? this.total += (total + this.aumentar): this.total += total;

      
    } else {
     
      nombre === 'web'? this.total -= (total + this.aumentar): this.total -= total;
      }
    
    

    return this.total;
    
  } */
  calculaTotal(nombre: string, select: boolean) {

    if (nombre === 'webControl') {
      select ? (this.total += 530) : (this.total -= 530);
    } else if (nombre === 'seoControl') {
      select ? (this.total += 300) : (this.total -= 300);
    } else {
      select ? (this.total += 200) : (this.total -= 200);
    }
 
    return this.total;
 
  }

  nuevoPresupuesto(presupuesto: Presupuesto) {
    
    this.presupuestos.push(presupuesto);
    console.log('presupuesto', this.presupuestos);
  }

  

  
  
  
}
