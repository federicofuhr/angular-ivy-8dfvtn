import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hardware } from '../hardware-components/Hardware';

@Component({
  selector: 'app-input-quantity-integer',
  templateUrl: './input-quantity-integer.component.html',
  styleUrls: ['./input-quantity-integer.component.scss'],
})
export class InputQuantityIntegerComponent implements OnInit {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.max > this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se alcanzo el maximo permitido.");
    }
  }

  downQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: any): void {
    //event.preventDefault();
    let keyCode: number;
    keyCode = event.keyCode;
    if (keyCode != 8 && keyCode != 46) {
      const isNumber = /^[0-9]$/i.test(event.key);
      if (!isNumber) {
        event.preventDefault();
      } else {
        this.quantityChange.emit(this.quantity);
      }
    }
  }
}
