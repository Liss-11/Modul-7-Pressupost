import { CalculaTotalService } from './../calcula-total.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {


  formWeb = new FormGroup({
    paginas: new FormControl('1', Validators.maxLength(3)),
    idiomas: new FormControl('1', Validators.maxLength(2))

  });


  constructor(
    private totalServicio: CalculaTotalService
  ) { }

  
  ngOnInit(): void {

    this.paginas = 1;
    this.idiomas = 1;
    this.aumentar = this.totalServicio.aumento(this.paginas, this.idiomas);
    console.log(this.aumentar);
    
    this.onChanges();

  }

  
  total: number;
  aumentar: number;
  paginas: number = parseInt(this.formWeb.controls['paginas'].value);
  idiomas: number = parseInt(this.formWeb.controls['idiomas'].value);

  //Llamo el servicio para obtener el precio de la web en funcion de paginas e idiomas


  //Prueva Final

  onChanges(): void {
    this.formWeb.controls['paginas'].valueChanges.subscribe(val => {
      this.paginas = parseInt(val);
      if (val !== '') {
       
        this.aumentar = this.totalServicio.aumento(val, this.idiomas);
        this.totalServicio.aumento1$.emit(this.aumentar);
      
      }
    });
    this.formWeb.controls['idiomas'].valueChanges.subscribe(val => {
      this.idiomas = parseInt(val);
      if (val !== '') {
        
        this.aumentar = this.totalServicio.aumento( this.paginas, val );

        this.totalServicio.aumento2$.emit(this.aumentar);
      }
    });
    
  

  /*     prueba 1 */
  
  /* onChanges(): void {
    this.formWeb.controls['paginas'].valueChanges.subscribe(val => {
      this.paginas = val;
      if (val !== '') {
        
        this.totalServicio.paginas$.emit(val);
        console.log(val);
      
      }
    });
    this.formWeb.get('idiomas')?.valueChanges.subscribe(val => {
      this.idiomas = val;
      if (val !== '') {
        

        this.totalServicio.idiomas$.emit(val);
        console.log(val);
      }
    }); */
    
   
  
  
  


  
  
  
  


  };

}
