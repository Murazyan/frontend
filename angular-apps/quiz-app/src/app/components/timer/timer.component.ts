import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy, OnChanges {
  @Input('time') timeInfo?: TimeInfo;
  @Output('timeFinsihed') timeFinished = new EventEmitter();


  remainingTime: number;
  intervalId: any;
  progress: number = 100; 

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeInfo']) {
      if (changes['timeInfo'].currentValue === 0) {
        this.clear();
      } else if (changes['timeInfo'].currentValue != changes['timeInfo'].previousValue) {
        this.clear();
        this.startCountdown();
      }
    }
    
    console.trace(changes)
  }

  changeProgerss() {
    this.remainingTime--;
    this.progress = ((this.timeInfo!.totalTime - this.remainingTime) / this.timeInfo!.totalTime) * 100;
  }

  startCountdown() {
    this.remainingTime = this.timeInfo!.totalTime;
    if (this.remainingTime > 0) {
      this.changeProgerss();
    }
    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.changeProgerss();
      } else {
        this.timeFinished.emit()
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  clear(){
    clearInterval(this.intervalId);
    // this.timeInfo = 0;
    // this.remainingTime = 0

  }

  constructor(){
    console.trace("cccccccccccc")
  }


}

export class TimeInfo{
    totalTime: number;

    constructor(totalTime: number){
      this.totalTime = totalTime;
    }

}