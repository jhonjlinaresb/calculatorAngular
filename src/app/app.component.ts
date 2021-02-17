import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buffer: number=0;
  op1: number=0;
  op2: number=0;
  operation: number=0;//Suma=1 Resta=2 Multiplicación=3
  delete: boolean=false;
  backspace(){}
  /**
   * 
   * @param numero return= void
   */
  addNumber(numero:number):void{
    if (this.delete){
      this.buffer = 0;
      this.delete = false;
    }
    this.buffer = this.buffer * 10 + numero;
  }
  clear():void{
    this.buffer = 0;
  }
  operacion(ope:number):void{
    this.op1 = this.buffer;
    this.buffer = 0;
    switch(ope){
      case 1: this.operation=1;
      break;
      case 2: this.operation=2;
      break;
      case 3: this.operation=3;
      break;
    }
  }
  resultado():void{
    this.op2 = this.buffer;
    switch(this.operation){
      case 1: this.buffer = this.op1 + this.op2;
      break;
      case 2: this.buffer = this.op1 - this.op2;
      break;
      case 3: this.buffer = this.op1 * this.op2;
      break;
    }
    this.op1 = 0;
    this.op2 = 0;
    this.delete = true;
  }
}
