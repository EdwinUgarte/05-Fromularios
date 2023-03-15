import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  fecha = new Date()
  fechaConst: string = `${this.fecha.getFullYear()}-${this.fecha.getMonth()}-${this.fecha.getDay()}`

    miFormulario : FormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      fecha: [`${this.fechaConst}`]
    })


    constructor(private formBuilder: FormBuilder) { }


    validarFecha(){
      if(this.miFormulario.controls['fecha']?.pristine && this.miFormulario.controls['fecha']?.touched){
        return true
      }
      return false
    }


    validarCampo(campo: string){
      if(this.miFormulario.controls[`${campo}`]?.invalid && this.miFormulario.controls[`${campo}`]?.touched){
        return true
      }
      return false
    }


    guardar(){
      if(this.miFormulario.valid){
        console.log(this.miFormulario.value);
        this.miFormulario.reset();
        return
      }

      this.miFormulario.markAllAsTouched()

    }
}
