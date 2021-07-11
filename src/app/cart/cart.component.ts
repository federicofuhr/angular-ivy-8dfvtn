import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HardwareCartService } from '../hardware-cart.service';
import { Hardware } from '../hardware-components/Hardware';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartList$: Observable<Hardware[]>;

  constructor(private cart: HardwareCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }



  ngOnInit(): void {}
}
