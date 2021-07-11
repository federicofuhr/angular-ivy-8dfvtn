import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hardware } from './hardware-components/Hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareCartService {

  private _cartList: Hardware[] = [];
  cartList: BehaviorSubject<Hardware[]> = new BehaviorSubject<Hardware[]>([]);

  constructor() { }

  addToCart(hw: Hardware):void{
    let producto = this._cartList.find((v1) => v1.name == hw.name);
    if (!producto) {
      this._cartList.push( {... hw} );
    } else {
      producto.quantity += hw.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
