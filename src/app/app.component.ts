import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular';
  numberOne = 0;
  numberTwo = 0;
  output = 0;
  operator = '';

  getResult(resultEmit: any) {
    this.output = resultEmit.result;
    this.operator = resultEmit.operator;
  }

  reset() {
    this.operator = '';
  }
}
