import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/CartItemModel';
import { ModalService } from '../../../services/modal.serevice';
import { ModalComponent } from '../../../components/modal/modal.component';
import { CartDataService } from './cart-data-service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardPageService {


  totalPairCount: number;
  openedPairCount = 0;
  boardSizeBS: Subject<string> = new BehaviorSubject<string>("4 x 4");

  boardSize: string;

  firstOpenedCart: CartItemModel | null;
  secondOpenedCart: CartItemModel | null;

  constructor(private modalService: ModalService, 
              private cartDataService: CartDataService
  ) { 
    this.boardSizeBS.subscribe(size => {
      this.boardSize = size;
      this.openedPairCount=0;
      this.cartDataService.getCarts(size)
    });
  
  }

  
  public onCartClick(CartItemModel: CartItemModel){
    this.decreaseClickedNumber(CartItemModel);
    if(this.firstOpenedCart){
      this.secondOpenedCart = CartItemModel;

      if(this.firstOpenedCart.index == this.secondOpenedCart.index){
        return;
      }

      const isPair = this.firstOpenedCart.cart.name == CartItemModel.cart.name;
      if(isPair){
        this.openedPairCount++;
        this.firstOpenedCart.diabled = true;
        this.secondOpenedCart.diabled = true;
        this.firstOpenedCart = null;
        this.secondOpenedCart = null;
        if(this.openedPairCount == this.totalPairCount){
          this.endGame("Congrats. You win the game ");
          return;
        }
      }else{
        if(this.firstOpenedCart.clickedCount==0 || this.secondOpenedCart.clickedCount==0){
          this.endGame('You have lost the game');
          return;
        }
        this.firstOpenedCart.isOriginal = false;
        this.secondOpenedCart.isOriginal = true;
        this.firstOpenedCart = this.secondOpenedCart;
        this.secondOpenedCart = null;
      }
    }else{
      this.firstOpenedCart = CartItemModel;
    }
  }

  private endGame(modalContent: string){
    this.modalService.openModal(ModalComponent, {
      title: 'Game over',
      content: modalContent
    })
    this.firstOpenedCart = null;
    this.secondOpenedCart = null;
    this.cartDataService.getCarts(this.boardSize);
  }

  private decreaseClickedNumber(cartItemModel: CartItemModel) {
    if (cartItemModel.isOriginal && cartItemModel.clickedCount > 0) {
      cartItemModel.decreaseClickedCount();
    } else {
      cartItemModel.diabled = cartItemModel.clickedCount == 0;
    }
  }

}
