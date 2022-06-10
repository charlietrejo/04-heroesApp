import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    HeroeComponent,
    AgregarComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
