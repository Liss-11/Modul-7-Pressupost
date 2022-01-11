import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, TemplateRef} from '@angular/core';





@Component({
  selector: 'app-panell',
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
    this.modal.open(content, { centered: true, size: 'xl' });
    
  }

}



