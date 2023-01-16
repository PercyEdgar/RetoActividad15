import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
 // Evento Binding
  resultado : number = 0
  valor = 0;
  numero: number = 0
 Incrementar(){
  this.valor = this.resultado++;
  console.log(this.valor);
  return this.valor
 }
 mensaje : string = "";
 Generar(event: any){
  this.mensaje = event.target.value;
 }
}
