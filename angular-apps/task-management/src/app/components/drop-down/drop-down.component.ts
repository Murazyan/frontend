import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IListItem } from '../../models/IListItem';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {

  
  @Input() items: IListItem []=[];
  @ViewChild('dropdown', {static: true}) dropdown: ElementRef;

  @Output() onSelect : EventEmitter<IListItem> = new EventEmitter<IListItem>();
  @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();
  @Output() onFieldsScroll : EventEmitter<void> = new EventEmitter<void>();
  searchTimer: number = 0;
  lastSearchTime: number = 0;

  searchTerm: string = '';
  loading: boolean = false;
  isDropdownOpen: boolean = false;

  selectItem(item: IListItem) {
    this.toggleDropdown(false); // Close dropdown after
    this.searchTerm =  item.value;
    this.onSelect.emit(item)
  }

  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }

  onSearchChange() {
    const sleepInterval = 400;
    const now = new Date().getTime();
    if (now - sleepInterval < this.lastSearchTime) {
      clearTimeout(this.searchTimer);
      this.lastSearchTime = now;
    }
    if (this.lastSearchTime === 0) {
      this.lastSearchTime = now;
    }
    this.searchTimer = window.setTimeout(() => {
      this.onSearch.emit(this.searchTerm);
      this.lastSearchTime = 0;
    }, sleepInterval)
  }

  onNearEndScroll() {
    this.onFieldsScroll.emit();
  }
}
