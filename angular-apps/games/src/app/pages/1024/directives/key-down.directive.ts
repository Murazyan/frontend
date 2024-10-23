import { Directive, HostListener } from '@angular/core';
import { OtteService } from '../services/otte.service';

@Directive({
  selector: '[appKeyDown]'
})
export class KeyDownDirective {

  constructor(private otteService: OtteService) { }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.otteService.moveUp();
        break;
      case 'ArrowDown':
        this.otteService.moveDown();
        break;
      case 'ArrowLeft':

        this.otteService.moveLeft();
        break;
      case 'ArrowRight':
        this.otteService.moveRight();
        break;
    }
    event.preventDefault()
  }

}
