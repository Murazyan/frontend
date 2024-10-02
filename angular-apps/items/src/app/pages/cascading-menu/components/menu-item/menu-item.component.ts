import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  @Input() item: any;
  @Input() level: number = 1;

  get hasChildren(): boolean {
    return this.item.children && this.item.children.length > 0;
  }

}
