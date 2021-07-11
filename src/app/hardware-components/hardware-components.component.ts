import { Component, OnInit } from '@angular/core';
import { HardwareCartService } from '../hardware-cart.service';
import { Hardware } from './Hardware';

@Component({
  selector: 'app-hardware-components',
  templateUrl: './hardware-components.component.html',
  styleUrls: ['./hardware-components.component.scss']
})
export class HardwareComponentsComponent implements OnInit {
  hwList: Hardware[] = [
    {
      img:
        'https://cdn.jsdelivr.net/gh/federicofuhr/angular-ivy-8dfvtn@master/src/assets/img/rx-550.png',
      name: 'RX 550 4GB DDR5',
      type: 'Placa de video',
      price: 75000,
      stock: 6,
      clearance: false,
      quantity: 1
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/federicofuhr/angular-ivy-8dfvtn@master/src/assets/img/gtx-1030.png',
      name: 'GeForce 1030 2GB DDR5',
      type: 'Placa de video',
      price: 35000,
      stock: 2,
      clearance: true,
      quantity: 1
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/federicofuhr/angular-ivy-8dfvtn@master/src/assets/img/kingston-ssd-kc400-1tb.png',
      name: 'Kingston SSD KC400 1TB',
      type: 'SSD',
      price: 17199,
      stock: 0,
      clearance: false,
      quantity: 0
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/federicofuhr/angular-ivy-8dfvtn@master/src/assets/img/ryzen-5-1600.png',
      name: 'Ryzen 5 1600',
      type: 'Procesador',
      price: 14000,
      stock: 2,
      clearance: false,
      quantity: 1
    }
  ];

  constructor(private cart: HardwareCartService) {}

  addToCart(hw: Hardware): void {
    this.cart.addToCart(hw);
    hw.stock -= hw.quantity;
    if (hw.stock > 0) hw.quantity = 1;
    else hw.quantity = 0;
  }

  maxReached(m: String) {
    console.log(m);
  }

  ngOnInit(): void {}
}
