import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartData } from '../models/CartData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  public cartsBS = new BehaviorSubject<Cart[]>([]);

  constructor(private http: HttpClient) {
  }

  public getCarts(boardSize: string) {
    this.http.get<CartData>('/assets/mock/cart-data_' + boardSize + '.json').subscribe(cartData => {
      this.cartsBS.next(this.shuffleArray(cartData.carts));
    })
  }

  public shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
  }


  
}
