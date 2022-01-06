
import { CalculaTotalService } from './calcula-total.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { InputComponent } from './input/input.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    InputComponent,
    PantallaInicioComponent,
    PressupostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  providers: [
    CalculaTotalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
