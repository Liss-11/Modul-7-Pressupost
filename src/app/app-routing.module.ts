import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';


const routes: Routes = [
  {path: '', component: PantallaInicioComponent},
  /* {path: 'home', component: HomeComponent } */
  {path: 'home', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
