import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenu } from '../models/IMenu';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuService {

  public menusBS = new BehaviorSubject<IMenu[]>([]);

  constructor(private http: HttpClient) { }

  getMenus(){   
    this.http.get<IMenu[]>('/assets/mock/menu/menu.json').subscribe(menus => {
        this.menusBS.next(menus);
      })
  }
}
