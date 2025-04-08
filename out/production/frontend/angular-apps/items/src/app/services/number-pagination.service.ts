import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemList } from '../models/itemList';

@Injectable({
  providedIn: 'root'
})
export class NumberPaginationService {


  public itemListBS = new BehaviorSubject<ItemList>({
    totalElementCount:0,
    page: 1,
    limit: 10,
    content: []
  });

  constructor(private http: HttpClient) { }


  getItemList(page: number){   
    this.http.get<ItemList>('/assets/mock/'+page+'.numberData.json').subscribe(itemList => {
        this.itemListBS.next(itemList);
      })
  }

}
