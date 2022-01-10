import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalculaTotalService } from './../calcula-total.service';
import { Component, EventEmitter, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  seo: boolean;
  campanya: boolean;

  formulario: FormGroup;
  presupuestos: Presupuesto[] = [];
  
  

  constructor(private TotalServicio: CalculaTotalService, public modal: NgbModal, private fb: FormBuilder) { }


  ngOnInit(): void {

    /* Formulario con FormBuilder */

    this.formulario = this.fb.group({
    myChoices: new FormArray([], Validators.required),
    nombre: ['', [Validators.required, Validators.minLength(2)] ],
    nomPresupuesto: ['', [Validators.required, Validators.minLength(2)]]
    })

    
    
    

    this.total = 0;
    this.seo = false;
    this.campanya = false;


    //Cuando se abre el subformulario - gestiona el Total

    //aumento en funcion de las PAGINAS
    this.TotalServicio.aumento1$.subscribe(aumento => {

      this.total = this.TotalServicio.totalWeb(aumento, this.seo, this.campanya);
      
      
    });

    //aumento en funcion de los idiomas
    this.TotalServicio.aumento2$.subscribe(aumento => {
      
      this.total = this.TotalServicio.totalWeb(aumento, this.seo, this.campanya);

    });
  
 
  }

  //Getters para las Validaciones

  get nombre() { return this.formulario.get('nombre'); };
  get nomPresupuesto() { return this.formulario.get('nomPresupuesto'); };




  /* Array de checkboxes y envio al servicio de los Datos de los mismos */

  onCheckChange(event:any) {
    const formArray: FormArray = this.formulario.get('myChoices') as FormArray;
    
    let selecionado: boolean;

  if(event.target.checked){
    // Añadimos nuevo FormControl al FormArray (MyChoices)
    formArray.push(new FormControl(event.target.value));
    selecionado = true;
    //abrir panel web
    if (event.target.value === 'Página Web') {
      this.panell = true;
    }
    //Para pasar parámetro al total de la suma WEB
    if (event.target.value === 'Consultoria SEO') {
      this.seo = true;
    }
     if (event.target.value === 'Campaña de Google Ads') {
      this.campanya = true;
    }

  }else{
    // Detectar los elementos descelecionados
    let i: number = 0;
    selecionado = false
    //Cerrar el panel de la WEB
    if (event.target.value === 'Página Web') {
      this.panell = false;
    }
      //Para pasar parámetro al total de la suma WEB
     if (event.target.value === 'Consultoria SEO') {
      this.seo = false;
     }
    if (event.target.value === 'Campaña de Google Ads') {
      this.campanya = false;
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

    this.presupuestos = this.TotalServicio.presupuestos;

    

    
  }
  

  
    
}

  

  