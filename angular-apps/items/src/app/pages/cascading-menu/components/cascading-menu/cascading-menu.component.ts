import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMenu } from '../../models/IMenu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cascading-menu',
  templateUrl: './cascading-menu.component.html',
  styleUrl: './cascading-menu.component.scss'
})
export class CascadingMenuComponent {
  protected title = "CascadingMenu"

  protected menus : IMenu [] = [];


  constructor(
    private titleService: Title,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef
  ) {
    this.menuService.getMenus();
    this.menuService.menusBS.subscribe(menus =>{
      this.menus = menus
    })
  }


  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
