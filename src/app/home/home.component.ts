import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalculaTotalService } from './../calcula-total.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, CheckboxControlValueAccessor } from '@angular/forms';
import { Presupuesto } from '../presupuesto.modelo';

export interface Choices {
  description: string,
  value: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  total: number;
  panell: boolean;

  formulario: FormGroup;
  

  constructor(private TotalServicio: CalculaTotalService, public modal: NgbModal, private fb: FormBuilder) { }

  public checks: Array<Choices> = [
  {description: 'Una página web (500€))', value: 'webControl'},
  {description: "Una consultoria SEO (300€)", value: 'seoControl'},
  {description: "Una campaña de Google Ads (200€)", value: 'campanyaControl'}
];

  ngOnInit(): void {

    /* Formulario con FormBuilder */

    this.formulario = this.fb.group({
    myChoices: new FormArray([]),
    nombre: ['', [Validators.required, Validators.minLength(2)] ],
    nomPresupuesto: ['', [Validators.required, Validators.minLength(2)]]
    })
    
    

    this.total = 0;

    //Cuando se abre el subformulario - gestiona el Total

    //aumento en funcion de las PAGINAS
    this.TotalServicio.aumento1$.subscribe(aumento => {

      this.total = this.TotalServicio.totalWeb(aumento, this.formulario.get('seoControl')?.value , this.formulario.get('campanyaControl')?.value);
      
    });

    //aumento en funcion de los idiomas
    this.TotalServicio.aumento2$.subscribe(aumento => {
      
      this.total = this.TotalServicio.totalWeb(aumento, this.formulario.get('seoControl')?.value, this.formulario.get('campanyaControl')?.value);

    });
  
 
  }

  /* Array de checkboxes y envio al servicio de los Datos de los mismos */

  onCheckChange(event:any) {
    const formArray: FormArray = this.formulario.get('myChoices') as FormArray;
    
    let selecionado: boolean;

  if(event.target.checked){
    // Añadimos nuevo FormControl al FormArray (MyChoices)
    formArray.push(new FormControl(event.target.value));
    selecionado = true;
    if (event.target.value === 'webControl') {
      this.panell = true;
    }

  }else{
    // Detectar los elementos descelecionados
    let i: number = 0;
    selecionado = false
    if (event.target.value === 'webControl') {
      this.panell = false;
    }

    formArray.controls.forEach(ctrl => {
      if(ctrl.value == event.target.value) {
        // Quitar seleccion del Array
        formArray.removeAt(i);
        return;
      }
      
      i++;
    });
  }
    
    this.total = this.TotalServicio.calculaTotal(event.target.value, selecionado);
    
    
  }

/*   Mandamos Datos al Servicio para crear presupuesto y añadirlo al array
 */  
  addPost(formulario: Presupuesto) {


    let nuevo: Presupuesto = new Presupuesto(formulario.nombre, formulario.nomPresupuesto, this.formulario.get('myChoices')?.value, this.total);
    this.TotalServicio.nuevoPresupuesto(nuevo);
    
    console.log(nuevo);
    
  }
  
  
    
}

  

  