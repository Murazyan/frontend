import {Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Directive({
  selector: '[appScrollTracker]',
})
export class ScrollTrackerDirective implements OnInit {
  @Input() threshold = 20;
  @Output() nearEnd = new EventEmitter<void>();
  private window!: Window;
  private scrollPosition = 0;

  constructor(private el: ElementRef) {
  }

  @HostListener('scroll', ['$event.target'])
  onWindowScroll() {
    const heightOfElement = this.el.nativeElement.scrollHeight;
    const innerHeight = this.el.nativeElement.clientHeight;
    const currentScrolledY = this.el.nativeElement.scrollTop;
    this.scrollPosition = currentScrolledY;
    const scrollToBottom = heightOfElement - innerHeight - currentScrolledY;
    if (scrollToBottom < this.threshold) {
      this.nearEnd.emit();
      setTimeout(() => this.restoreScrollPosition(), 500)

    }
  }

  restoreScrollPosition() {
    // Restore the scroll position
    this.el.nativeElement.scrollTop = this.scrollPosition;
  }

  ngOnInit(): void {
    this.window = window;
  }

}
