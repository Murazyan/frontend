import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {




  @Input('columnName') columnName: string
  @Input('task') task: Task

  @ViewChild('taskEditModal') taskEditModal: TaskEditComponent;


  showTaskEditModal(task: Task) {

    this.taskEditModal.open(task);
  }

}
