import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2567894.5489;
  porcentaje: number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
