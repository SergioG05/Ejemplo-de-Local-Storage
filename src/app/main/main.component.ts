import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nombreInput = ''; // Inicializa la variable nombreInput
  nombreGuardado = localStorage.getItem('nombreGuardado') || ''; // Inicializa la variable nombreGuardado con el valor del local storage, o una cadena vacía si no existe

  constructor() { }

  ngOnInit(): void {
    // Verifica si el valor del local storage existe y actualiza la variable nombreGuardado
    if (localStorage.getItem('nombreGuardado')) {
      this.nombreGuardado = localStorage.getItem('nombreGuardado')!;
    }
  }

  guardarNombre() {
    localStorage.setItem('nombreGuardado', this.nombreInput);
    document.getElementById('nombreGuardado')!.innerText = this.nombreInput;
  }

  borrarNombre() {
    localStorage.removeItem('nombreGuardado');
    document.getElementById('nombreGuardado')!.innerText = '';
    this.nombreGuardado = '';
  }

}

