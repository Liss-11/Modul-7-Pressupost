import { Component, Input, OnInit } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';
import { CalculaTotalService } from '../calcula-total.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  entrada = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(25)]);

  paginas: number;
  idiomas: number;
  menos: boolean;
  mas: boolean;


  @Input() nombre: string;


  constructor(private totalServicio: CalculaTotalService) { }


  ngOnInit(): void {

    this.paginas = 1;
    this.idiomas = 1;
    this.menos = true;
    this.mas = false;

    this.onChanges(); 

  }

  onChanges() {

    //Con entrada unica

    this.entrada.valueChanges.subscribe(change => {
      if (change !== null) {
        if (this.nombre === "paginas") {

          this.paginas = change;
          this.totalServicio.recibeParámetro(this.nombre, change);

        } else if (this.nombre === "idiomas") {

          this.idiomas = change;

          this.totalServicio.recibeParámetro(this.nombre, change);
        }
      }
    
      //Bloqueo Botones
      this.entrada.value <= 1 ? this.menos = true : this.menos = false;
      this.entrada.value >= 25 ? this.mas = true : this.mas = false;
        
    });

  }

  sumar() {

    //entrada unica

    if (this.nombre === "paginas") {
      
      this.entrada.patchValue(this.paginas + 1);
      
    } else if (this.nombre === "idiomas") {
      this.entrada.patchValue(this.idiomas + 1);
      
    }
    //HABILITA el botó de Restar
    if (this.entrada.value > 0) {
      this.menos = false;
    }
  }
  

    restar() {
      
      //entrada unica

    if (this.nombre === "paginas") {
      
      this.entrada.patchValue(this.paginas - 1);
      
    } else if (this.nombre === "idiomas") {

      this.entrada.patchValue(this.idiomas - 1);
      
    }
    //DESHABILITA el botó de Restar
    if (this.entrada.value === 0) {
      this.menos = true;
      }

  }

}
