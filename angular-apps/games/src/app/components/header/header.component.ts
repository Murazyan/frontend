import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() collapsedClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isCollapsed = false;

  collapsedOnClick(){
    this.isCollapsed = !this.isCollapsed;
    this.collapsedClick.emit(this.isCollapsed);
  }
  


}
