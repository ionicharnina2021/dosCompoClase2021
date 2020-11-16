import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor;
  seleccion;
  console=["nes","n64","ps","genesis","saturn","snes"];
  constructor() {}
  cargar(){
    console.log("no se de momento");
    
  }
}
