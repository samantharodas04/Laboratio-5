import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  op1 : number = 0
  op2 : number = 0
  resultado : number = 0
  mostrarResultado = false;


  constructor() { }

  ngOnInit(): void {
  }

  sumar(): void{

    this.mostrarResultado = true

    this.resultado = this.op1 + this.op2

  }

  restar(): void{

    this.mostrarResultado = true

    this.resultado = this.op1 - this.op2

  }

  dividir(): void{

    this.mostrarResultado = true

    this.resultado = this.op1 / this.op2

  }

  multiplicar(): void{

    this.mostrarResultado = true

    this.resultado = this.op1 * this.op2

  }

  potencia(): void{

    this.mostrarResultado = true

    this.resultado = this.op1 ** this.op2

  }

}
