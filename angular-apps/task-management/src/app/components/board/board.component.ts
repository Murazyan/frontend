import { Component, Input } from '@angular/core';
import { TasksModel } from '../home/home.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @Input('taskData') taskData: TasksModel[];

}
