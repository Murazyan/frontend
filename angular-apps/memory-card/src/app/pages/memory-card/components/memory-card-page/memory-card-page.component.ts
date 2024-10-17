import {Component, inject, QueryList, ViewChildren } from '@angular/core';
import { CartDataService } from '../../services/cart-data-service';
import { CardPageService } from '../../services/card-page.service';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-memory-card-page',
  templateUrl: './memory-card-page.component.html',
  styleUrl: './memory-card-page.component.scss'
})
export class MemoryCardPageComponent  {


  gridStyle = {
    height: '150px',
  };


  protected cartService: CartDataService  = inject(CartDataService)
  protected cartPageService: CardPageService = inject(CardPageService)
  protected cartItemModels: CartItemModel[]= [];

  constructor(){
    this.cartPageService.boardSizeBS.next("4 x 4");

    this.cartService.cartsBS
      .subscribe(carts => {
       this.cartItemModels =  carts.map((c, index) => new CartItemModel(c, ++index));
       this.cartPageService.totalPairCount = this.cartItemModels.length / 2;
      });
    this.cartService.getCarts(this.cartPageService.boardSize)
  }

  selectBoardSize(size: string) {
    this.cartPageService.boardSizeBS.next(size);
  }

  getColSpan(): number {
    const numbers = this.cartPageService.boardSize.match(/\d+/g);
    if (numbers) {
      const columns = parseInt(numbers[0], 10);
      return Math.floor(24 / columns);

    } else {
      console.error('No selected board size')
      return 0;
    }
  }


  onCartClick(cart: CartItemModel) {
    this.cartPageService.onCartClick(cart)
  }

}
