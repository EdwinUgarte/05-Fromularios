import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {


  //? Jala un objeto por referencia
  @ViewChild('miFormulario') //#miFormulario en el HTML
  miFormulario!: NgForm;

  inicialForm = {
    producto: '',
    precio: 0,
    existencias: 1
  }

  

  // guardar(miformulario: NgForm){
  guardar() {
    console.log('Posteo correcto');


    //Resetear form y enviar datos default despues de hacer el reset
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    })
  }






  validarNombre(): boolean {
    if (
      this.miFormulario?.form.controls[`producto`]?.invalid &&
      this.miFormulario?.form.controls[`producto`]?.touched
    ) {
      return true;
    }
    return false;
  }

  validarPrecio(): boolean {
    if (
      this.miFormulario?.form.controls[`precio`]?.touched &&
      this.miFormulario?.form.controls['precio']?.value < 0 
    ) {
      return true;
    }
    return false;
  }
}
