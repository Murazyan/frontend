import { Component } from '@angular/core';
import { ItemList } from '../../models/itemList';
import { NumberPaginationService } from '../../services/number-pagination.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-number-pagination',
  templateUrl: './number-pagination.component.html',
  styleUrl: './number-pagination.component.scss'
})
export class NumberPaginationComponent {
  protected itemList: ItemList;
  protected paginationPanedDisabled = false;

  constructor(private numberPAginationService: NumberPaginationService){
    this.numberPAginationService.getItemList(1);
    this.numberPAginationService.itemListBS.subscribe(itemList =>{
      this.itemList = itemList;
    })
  }

  goToPage(page: number) {
    this.paginationPanedDisabled = true;
    if(page%2==0){
      setTimeout(()=>{
        this.numberPAginationService.getItemList(page);
        this.paginationPanedDisabled = false;
      }, 2000)
    }else{
      this.numberPAginationService.getItemList(page);
      this.paginationPanedDisabled = false;
    }
  }


  itemClicked(clickedItem: Item) {
    this.paginationPanedDisabled = true;
    if(+clickedItem.name%2==0){
      alert(clickedItem.name);
      this.paginationPanedDisabled = false;
    }
    else{
      setTimeout(()=>{
        alert(clickedItem.id);
        this.paginationPanedDisabled = false;
      },2000)
    }
  }
    

}
