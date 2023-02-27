import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  @ViewChild('myForm')
  myForm!: NgForm;

  persona: Persona = {
    nombre: 'Edwin',
    favoritos: [
      { id: 1, nombre: 'Spiderman PS' },
      { id: 2, nombre: 'Fifa 23' },
    ],
  };

  nuevoJuego: string = '';

  guardar() {
    console.log(this.myForm.value);
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregar() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({...nuevoFavorito}); 
    this.nuevoJuego = '';
  }

  validarNombre() {
    return (
      this.myForm?.controls['nombre']?.invalid &&
      this.myForm?.controls['nombre']?.touched
    );
  }
}
