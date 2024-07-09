import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plus-operator',
  templateUrl: './plus-operator.component.html',
  styleUrls: ['./plus-operator.component.sass']
})
export class PlusOperatorComponent {
  @Input() one: number = 0;
  @Input() two: number = 0;
  @Output() resultEmit = new EventEmitter<any>();
  @Output() operatorEmit = new EventEmitter<string>();

  getResult() {
    this.resultEmit.emit({ result: this.one + this.two, operator: '+'})
  }
}
