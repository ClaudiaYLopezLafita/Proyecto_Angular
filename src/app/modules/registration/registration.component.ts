import { Component } from '@angular/core';
import {Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  //Tallas para el atributo size
  sizes = ['XS','S','M','L','XL'];

  //Datos de ejemplo para la persona
  model = new Person(1,"Claudia Yazmin","Lopez Lafita",
                    "alum.clopezl.2021@iesalixar.com", this.sizes[3], "IMPERIAL");

  //control de fomrulario enviado por defecto a falso
  submitted = false;

  // una vez que el formulario se envia entonces se esntable a enviado
  onSubmit(){this.submitted = true};

  //Método para inicalizar una nueva persona:
  newPerson(){
    this.model = new Person(2,"","","","");
  }
}
