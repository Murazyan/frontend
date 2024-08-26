import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import { TaskStatus } from '../../models/taskStatus';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {

  protected currentUser: User | null;

  constructor(
    private userService: UserService,
    protected taskService: TaskService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.userService.currentUserS.subscribe(user => {
      this.currentUser = user;
      this.taskService.getTasksByUser(this.currentUser);
      this.cdr.detectChanges(); 
    });

    this.taskService.tasksBS$.subscribe(tasks => {
      tasks.forEach(t => {
        this.taskService.taskData.find(tt => tt.name === t.status.toString())?.tasks.push(t);
      });
      this.cdr.detectChanges(); 
    });
  }

  ngOnInit(): void {}
  
}
export class TasksModel{

    name: string;
    tasks: Task[]
  
}