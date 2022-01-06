import { NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';




@Component({
  selector: 'app-panell',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
  
  
  
export class PanellComponent implements OnInit {

  
  constructor(public modal:NgbModal) {}
    
  message1: string = "paginas";
  message2: string = "idiomas";

  
  ngOnInit(): void {

  };

  abrirModal(content:TemplateRef<string>) {
    this.modal.open(content, { centered: true, modalDialogClass: 'modali', size: 'xl'});
  }

}


  

  //Ejercicio 2

    /* this.paginas = 1;
    this.idiomas = 1;
    this.aumentar = this.totalServicio.aumento(this.paginas, this.idiomas);

    this.onChanges();

  }

  total: number;
  aumentar: number;
  paginas: number = parseInt(this.formWeb.controls['paginas'].value);
  idiomas: number = parseInt(this.formWeb.controls['idiomas'].value);*/

  //Llamo el servicio para obtener el precio de la web en funcion de paginas e idiomas


  //Prueva Final



  /*onChanges(): void {
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
    


  }; */


