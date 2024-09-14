import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {


  @Input('item') item: Item;
  @Output("itemClick" ) itemClick:  EventEmitter<Item> = new EventEmitter<Item>();

  itemClicked() {
    this.itemClick.emit(this.item);
  }

}
