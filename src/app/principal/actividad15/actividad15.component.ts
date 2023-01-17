import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad15',
  templateUrl: './actividad15.component.html',
  styleUrls: ['./actividad15.component.css']
})
export class Actividad15Component {
  data: Array<any> = [];
newData: any;
nombre: string = '';
apellido: string = '';
carrera: string = '';
id: number = 0;
confirmacion:any;

addData() {
this.newData = {
id: this.id++,
nombre: this.nombre,
apellido: this.apellido,
carrera: this.carrera,
};
this.data.push(this.newData);
this.nombre = '';
this.apellido = '';
this.carrera = '';
console.log(this.data);
}

deleteData(id: number) {
  this.confirmacion = confirm("¿DESEA ELIMINAR?");
  if(this.confirmacion == true){
    this.data = this.data.filter((item) => item.id !== id);
  }

}

  

}
