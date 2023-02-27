import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  @ViewChild('miFormulario')
  miFormulario!: NgForm;

  persona = {
    genero: '',
    notificaciones: true,
  };

  terminos: boolean = false;

  ngOnInit(): void {}

  validarGenero() {
    if (
      this.miFormulario?.controls['genero']?.errors
    ) {
      return true;
    }
    return false;
  }

  validarTerminos() {
    if (
      this.miFormulario?.controls['terminos']?.touched &&
      this.miFormulario?.controls['terminos']?.errors
    ) {
      return true;
    }
    return false;
  }
}
