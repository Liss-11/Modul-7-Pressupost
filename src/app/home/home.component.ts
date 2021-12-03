import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  total: number;


  constructor() { }

  
  webControl = new FormControl('');
  seoControl =  new FormControl('');
  campanyaControl=  new FormControl('');

 

  ngOnInit(): void {
    this.total = 0;
    
  }

  totalReturn(e: any): void {
    let actual = Number(e.target.value);
    if (e.target.checked) {
      
      this.total += actual;

    } else if (this.total > 0) {
      this.total -= actual;
    } 
      
  }

}

/* dentro de webControl - que será - FormGroup
  pages: new FromControl (''.  Validators.pattern('[0]')) 
  
  en el HTML <input [class.in-invalid]="webControl.get('pages')
  .toches && webControl.get('pages').invalid"

*/
