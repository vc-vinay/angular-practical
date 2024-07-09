import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multiply-operator',
  templateUrl: './multiply-operator.component.html',
  styleUrls: ['./multiply-operator.component.sass']
})
export class MultiplyOperatorComponent {
  @Input() one: number = 0;
  @Input() two: number = 0;
  @Output() resultEmit = new EventEmitter<any>();
  @Output() operatorEmit = new EventEmitter<string>();

  getResult() {
    this.resultEmit.emit({ result: this.one * this.two, operator: '*'})
  }
}
