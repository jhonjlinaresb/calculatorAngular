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
  /**
   * 
   * @param numero return= void
   */
  addNumber(numero:number):void{
    this.buffer = this.buffer * 10 + numero;
  }
  clear(){
    this.buffer = 0;
  }
}
