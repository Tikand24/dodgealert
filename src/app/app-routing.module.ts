import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent }      from './nav/nav.component';
import { Form1Component } from './form1/form1.component';
import { FormdosComponent } from './formdos/formdos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SingleinvocadorComponent } from "./singleinvocador/singleinvocador.component";
import { CalifyinvocadorComponent } from "./califyinvocador/califyinvocador.component";

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
  { path: 'form1', component: Form1Component },
  { path: 'form2', component: FormdosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'invocador/:invocador', component: SingleinvocadorComponent },
  { path: 'calify-invocador', component: CalifyinvocadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
