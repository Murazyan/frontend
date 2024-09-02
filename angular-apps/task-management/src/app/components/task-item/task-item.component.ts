import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
 

  router: Router = inject(Router)


  @Input('columnName') columnName: string
  @Input('task') task: Task

  @ViewChild('taskEditModal') taskEditModal: TaskEditComponent;


  showTaskEditModal(task: Task) {

    this.taskEditModal.open(task);
  }

  openTaskFullView(task: Task) {
    this.router.navigate(['maintenance/task/'+task.id])
  }

}
