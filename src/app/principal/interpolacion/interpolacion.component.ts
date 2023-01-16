import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  direccion : string = "Calle lima 125 - Sam Luis"
  datos = {
    nombre :"Juan CArlos",
    apellido : "Perez Castro"
  }

 total : number = 125;
 producto(num1: number, num2:number,){
  return num1 * num2
 }
}
