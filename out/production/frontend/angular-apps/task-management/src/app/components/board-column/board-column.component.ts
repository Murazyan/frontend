import { AfterViewInit, Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskStatus } from '../../models/taskStatus';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.scss'
})
export class BoardColumnComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
  }


  getIds(arg0: string) :string[]{
    return [TaskStatus.NEW,
     TaskStatus.IN_PROGRESS, 
     TaskStatus.DONE,
     TaskStatus.BLOCKED]
    .filter(i => i.toLocaleString() !== arg0)
    .map(s=>s.toLocaleString());
  }

  @Input ('title') title: string
  @Input ('tasks') tasks: Task[];




  drop(event: CdkDragDrop<any >) {
    (<Task>event.item.data).status =TaskStatus[event.container.id as keyof typeof TaskStatus] ;
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
