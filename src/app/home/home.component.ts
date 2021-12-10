import { CalculaTotalService } from './../calcula-total.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  total: number;
  

  constructor(private TotalServicio: CalculaTotalService) { }

  
  webControl = new FormControl('');
  seoControl =  new FormControl('');
  campanyaControl = new FormControl('');
  
 
  ngOnInit(): void {
    this.total = 0;

  
    //Cuando se abre el subformulario - gestiona el Total

    //aumento en funcion de las PAGINAS
    this.TotalServicio.aumento1$.subscribe(aumento => {

      this.total = this.TotalServicio.totalWeb(aumento, this.seoControl.value, this.campanyaControl.value);
      
    });

    //aumento en funcion de los idiomas
    this.TotalServicio.aumento2$.subscribe(aumento => {
      
      this.total = this.TotalServicio.totalWeb(aumento, this.seoControl.value, this.campanyaControl.value);

    });

                      //pasamos al Service los parámetros de los checkboxes
    //PÁGINA WEB

    this.webControl.valueChanges.subscribe(change => {
      this.total = this.TotalServicio.calculaTotal(500, change, 'web');
    });

    //CONSULTORIO SEO
    this.seoControl.valueChanges.subscribe(change => { 
      this.total = this.TotalServicio.calculaTotal(300, change, 'seo');
    });

    //CAMPANYA GOOGLE
     this.campanyaControl.valueChanges.subscribe(change => {
       this.total = this.TotalServicio.calculaTotal(200, change, 'campanya');
     });
 
  }  
    
}

  

  