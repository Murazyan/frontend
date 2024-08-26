import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskStatus } from '../../models/taskStatus';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.scss'
})
export class BoardColumnComponent {


  getIds(arg0: string) :string[]{
    return [TaskStatus[TaskStatus.NEW],
     TaskStatus[TaskStatus.IN_PROGRESS], 
     TaskStatus[TaskStatus.DONE],
     TaskStatus[TaskStatus.BLOCKED]]
    .filter(i => i.toLocaleString() !== arg0)
    .map(s=>s.toLocaleString());
  }

  @Input ('title') title: string
  @Input ('tasks') tasks: Task[];




  drop(event: CdkDragDrop<any >) {
    console.log('drop: ', TaskStatus[event.container.id as keyof typeof TaskStatus].toLocaleString())
    console.log('drop: data', event.item.data.status.toLocaleString());
    (<Task>event.item.data).status = TaskStatus[event.container.id as keyof typeof TaskStatus];
    console.log('drop: data 2', event.item.data.status.toLocaleString());

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    // (<Task>event.item.data).status = TaskStatus[event.container.id as keyof typeof TaskStatus];

  }

}
