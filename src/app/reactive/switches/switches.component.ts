import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['', Validators.required],
    notificaciones: [false],
    terminos: [false, Validators.requiredTrue],
  })


  persona = {
    genero: 'F',
    notificaciones : true,
  }

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
      this.miFormulario.reset(this.persona);
  }

  validarCampo(campo : string){
    if(this.miFormulario.controls[`${campo}`]?.invalid && this.miFormulario.controls[`${campo}`]?.touched){
      return true
    }
    return false
  }


  guardar(){
    const formValue = {...this.miFormulario.value}
    delete formValue.terminos;

    this.persona = formValue;
    console.log(this.persona);
  }

}
