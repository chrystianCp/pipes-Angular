import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombres: string[] = ['Chrystian','Esmeralda','Unicornio'];
  generos: string[] = ['masculino','femenino','unicornioespecial'];
  nombreActual: string = 'Chrystian';
  actual: number = 1;
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'unicornioespecial': 'invitarle'
  }
  //i18nPlural
  clientesActivos: string[] = ['Maria','Juana','Gilis','Chrystian','Jhay'];
  clientesFunados: string[] = [];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': `tenemos # clientes esperando.`,
  }

  cambiarPersona(){    
    if(this.actual === 3){
      this.nombreActual = this.nombres[this.actual];
      this.actual = 0;
    }    
    this.nombreActual = this.nombres[this.actual];
    this.actual++;    
  }

  funarCliente(){        
    if(this.clientesActivos.length===0){return}
    const volando = this.clientesActivos.pop();
    this.clientesFunados.unshift(volando!);    
  }

  perdonarCliente(){
    if(this.clientesFunados.length===0){return}
    const volando = this.clientesFunados.pop();
    this.clientesActivos.unshift(volando!);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'chrystian',
    edad: 26,
    direccion: 'tultepec, edomex',
    degree: 'fullstack '
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'ironman',
      color: 'dorado y vino'    
    },
    {
      nombre: 'spiderman',
      color: 'azul y rojo'
    }
  ];

  //Async Pipe 
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Fin.')
    },5000)
  });



}
