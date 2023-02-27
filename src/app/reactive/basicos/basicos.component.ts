import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  //? Esta es una manera de hacerlo pero se puede ahorrar toda las instancias, creando un FormBuilder como en la parte de abajo
  // miFormulario: FormGroup = new FormGroup({
  //   nombre:     new FormControl('RTX 4080ti'),
  //   precio:     new FormControl(0),
  //   existencia: new FormControl(0),

  // })
 

  //? Manera de hacerlo con FormBuilder, es un servicio, NOTA ☝🏻 se tiene que importar en el constructor 
  miFormulario: FormGroup = this.formBuilder.group({
    nombre:     ['', [Validators.required, Validators.minLength(3)]],
    precio:     [0, [Validators.required, Validators.min(0)]],
    existencia: [0, [Validators.required, Validators.min(0)]],
  })


  constructor(private formBuilder: FormBuilder){}


  validarCampo(campo : string){
    if(this.miFormulario.controls[`${campo}`].errors && this.miFormulario.controls[`${campo}`].touched){
      return true
    }
    return false
  }

}
