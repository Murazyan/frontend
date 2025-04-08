import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemList } from '../../models/itemList';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  protected disabled : boolean = false;
  protected currentPage = 1;
  protected selectedItem: Item;

  @Input('itemsData') items: ItemList;

  @Output("nextPageClick") nextPageClick: EventEmitter<number> = new EventEmitter<number>();
  @Output("previousPageClick") previousPageClick: EventEmitter<number> = new EventEmitter<number>();
  @Output("itemClick") itemClick: EventEmitter<Item> = new EventEmitter<Item>();

  nextClick() {
    this.nextPageClick.emit(this.currentPage)
    this.currentPage = this.currentPage + 1;
  }

  previousClick() {
    this.previousPageClick.emit(this.currentPage)
    this.currentPage = this.currentPage - 1;
  }

  itemClicked(clickedItem: Item) {
    this.selectedItem = clickedItem;
    this.itemClick.emit(clickedItem);
  }
    

}
