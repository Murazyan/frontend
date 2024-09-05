import {  Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {

  @Input('time') totalTime: number; 
  @Output('timeFinsihed') timeFinished = new EventEmitter();


  remainingTime: number;
  intervalId: any;
  progress: number = 100; 

  ngOnInit() {
    this.remainingTime = this.totalTime;
    this.startCountdown();

  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.progress = ((this.totalTime - this.remainingTime) / this.totalTime) * 100;
      } else {
        this.timeFinished.emit()
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public startNewTimer(time: number){
    clearInterval(this.intervalId);
    this.totalTime = time;
    this.remainingTime = time
    this.startCountdown()
  }

  clear(){
    clearInterval(this.intervalId);
    // this.totalTime = 0;
    // this.remainingTime = 0

  }
}