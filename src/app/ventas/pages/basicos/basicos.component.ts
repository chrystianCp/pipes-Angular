import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'chrystian';
  nombreUpper: string = 'CHRYSTIAN';
  nombreLuper: string = 'cHRYstIAn carDENAs';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
