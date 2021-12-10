import { EventEmitter, Injectable } from '@angular/core';

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
 

  constructor() { }

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

  
  calculaTotal(total: number, change: boolean, nombre:string) {

    if (change) {

      nombre === 'web'? this.total += (total + this.aumentar): this.total += total;

      
    } else {
     
      nombre === 'web'? this.total -= (total + this.aumentar): this.total -= total;
      }
    
    

    return this.total;
    
  }

  

  
  
  
}
