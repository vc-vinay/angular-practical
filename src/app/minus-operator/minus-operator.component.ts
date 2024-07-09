import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-minus-operator',
  templateUrl: './minus-operator.component.html',
  styleUrls: ['./minus-operator.component.sass']
})
export class MinusOperatorComponent {
  @Input() one: number = 0;
  @Input() two: number = 0;
  @Output() resultEmit = new EventEmitter<any>();
  @Output() operatorEmit = new EventEmitter<string>();

  getResult() {
    this.resultEmit.emit({ result: this.one - this.two, operator: '-'})
  }
}
