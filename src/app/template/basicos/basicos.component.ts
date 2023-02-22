import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  //? Jala un objeto por referencia
  @ViewChild('miFormulario')
  miFormulario!: NgForm;

  // guardar(miformulario: NgForm){
  guardar() {
    console.log(this.miFormulario);
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
