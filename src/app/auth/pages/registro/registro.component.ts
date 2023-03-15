import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {nombreApellidoPattern} from 'src/app/validators/validaciones';
import { ValidatorsService } from 'src/app/validators/validators.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group(
    {
      nombre:    ['',[Validators.required, Validators.pattern(nombreApellidoPattern)]],
      email:     ['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)], [this.authService]],
      username:  ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  get emailErrorMsj(): string {
    const errors = this.miFormulario.controls['email']?.errors;

    if (errors?.['required']) {
      return 'El email es requerido';
    } else if (errors?.['pattern']) {
      return 'El email debe de tener un formato correcto';
    } else if (errors?.['emailYaExistente']) {
      return 'El email ya tiene un registro existente';
    } else {
      return '';
    }
  }


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Edwin Ugarte',
      email: 'edwin.ugarte1120@gmail.com',
      username: 'Edwin_Ugarte',
      password: '1234567',
      password2: '1234567',
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorsService,
    private authService: AuthService
  ) {}

  validarCampo(campo: string) {
    return (
      this.miFormulario.controls[`${campo}`]?.invalid &&
      this.miFormulario.controls[`${campo}`].touched
    );
  }

  enviarFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
