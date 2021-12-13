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
  paginas: number = 1;
  idiomas: number = 1;
 

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

  
  calculaTotal(total: number, change: boolean, nombre:string) {

    if (change) {

      nombre === 'web'? this.total += (total + this.aumentar): this.total += total;

      
    } else {
     
      nombre === 'web'? this.total -= (total + this.aumentar): this.total -= total;
      }
    
    

    return this.total;
    
  }

  

  
  
  
}
