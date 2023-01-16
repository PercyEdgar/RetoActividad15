import { Component } from '@angular/core';

@Component({
  selector: 'app-reto15',
  templateUrl: './reto15.component.html',
  styleUrls: ['./reto15.component.css']
})
export class Reto15Component {
  ocultar = "";
  Ocultar(event: any){
    this.ocultar = event.target.value;
   }
   twoway : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita, laudantium debitis sunt et corporis qui dolores aperiam blanditiis consequatur? Quas in soluta quaerat dolore. Nostrum magnam reprehenderit delectus voluptas."
}
