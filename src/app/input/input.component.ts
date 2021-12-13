import { Component, Input, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { CalculaTotalService } from '../calcula-total.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  entrada = new FormControl('1');
  paginas: number;
  idiomas: number;

  @Input() nombre: string;
  

  constructor(private totalServicio: CalculaTotalService) { }


  ngOnInit(): void {

    this.paginas = 1;
    this.idiomas = 1;
    
    this.onChanges();

  }

  onChanges() {
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
      
    });

  }

  sumar() {
    if (this.nombre === "paginas") {
      
      this.entrada.patchValue(this.paginas+1);
      
    } else if (this.nombre === "idiomas") {
      this.entrada.patchValue(this.idiomas+1); 
    }
  }

  restar() {
    if (this.nombre === "paginas") {
      
      this.entrada.patchValue(this.paginas-1);
      
    } else if (this.nombre === "idiomas") {

      this.entrada.patchValue(this.idiomas-1);
      
    }
    
  }

}
