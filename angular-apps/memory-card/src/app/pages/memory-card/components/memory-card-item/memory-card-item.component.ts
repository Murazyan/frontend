import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-memory-card-item',
  templateUrl: './memory-card-item.component.html',
  styleUrl: './memory-card-item.component.scss'
})
export class MemoryCardItemComponent implements AfterViewInit {

  @Input() cartItemModel: CartItemModel;
  @Output() cartClicked: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  protected images: string[] = [];

  ngAfterViewInit(): void {
    this.images.push('assets/images/carts/card.jpg');
    this.images.push('assets/images/carts/' + this.cartItemModel.cart.name);
  }

  rotateImage() {
    this.cartItemModel.isOriginal = !this.cartItemModel.isOriginal;
    this.cartClicked.emit(this.cartItemModel)
  }

}
