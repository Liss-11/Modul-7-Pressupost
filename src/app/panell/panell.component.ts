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



