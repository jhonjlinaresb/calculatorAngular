import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buffer: number=0;
  addNumber(numero:number){
    this.buffer = this.buffer * 10 + numero;
  }
}
