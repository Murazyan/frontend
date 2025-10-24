import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime',
})
export class NumberToTimePipe implements PipeTransform {

  transform(seconds: number): unknown {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    return `${mm}:${ss}`;
  }

}
