import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento/evento.component';
import { FormsModule } from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { Reto15Component } from './reto15/reto15.component';
import { Actividad15Component } from './actividad15/actividad15.component';



@NgModule({
  declarations: [
    EventoComponent,
    TwowayComponent,
    InterpolacionComponent,
    Reto15Component,
    Actividad15Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EventoComponent,
    TwowayComponent,
    InterpolacionComponent,
    Reto15Component,
    Actividad15Component
  ]
})
export class PrincipalModule { }
