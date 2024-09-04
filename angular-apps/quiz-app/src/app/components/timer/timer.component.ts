import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {


  @Input('time') totalTime: number; 
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
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    return `${mm}:${ss}`;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}