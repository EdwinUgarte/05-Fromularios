import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {

  
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Edwin', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
      ['Spiderman', Validators.required]
    ]),
  });
  
  nuevoJuego: FormControl = this.formBuilder.control('', Validators.required);
  
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  
  constructor(private formBuilder: FormBuilder) {}

  validarCampo(campo: string) {
    if (
      this.miFormulario.controls[`${campo}`]?.errors &&
      this.miFormulario.controls[`${campo}`]?.touched
    ) {
      return true;
    }

    return false;
  }

  guardar(){
    if(this.miFormulario.valid){
      console.log(this.miFormulario.value);
      this.miFormulario.reset()
    }
    else{
      this.miFormulario.markAllAsTouched();
      return console.error('Error el formulario no cumple las condiciones');
    }
  }

  eliminar(index : number){
    this.miFormulario.controls['favoritos']?.value.splice(index,1)
  }

  agregarFavorito(){
   if(this.nuevoJuego.invalid){return}
   this.nuevoJuego.reset

  //  this.miFormulario.controls['favoritos']?.value.push( new FormControl(this.nuevoJuego.value).value)
  this.favoritosArr.push( this.formBuilder.control(this.nuevoJuego.value, Validators.required))

  console.log(this.favoritosArr.controls);
  }


}
