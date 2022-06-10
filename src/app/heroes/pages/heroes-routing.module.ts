import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'listado', component: ListadoComponent},
      { path: 'agregar', component: AgregarComponent},
      { path: 'editar/:id', component: AgregarComponent},
      { path: 'buscar', component: BuscarComponent},
      { path: ':id', component: HeroeComponent},
      { path: '**', redirectTo: 'listado' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
