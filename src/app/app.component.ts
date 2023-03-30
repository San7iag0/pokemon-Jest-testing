import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(){}

  onInit() {
    this.sumar(2, 2);
  }

  title = 'angular-testing';

  sumar(a: number, b: number){
    a + b
  }
}
