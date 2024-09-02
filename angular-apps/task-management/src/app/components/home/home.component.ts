import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import { TaskStatus } from '../../models/taskStatus';
import { Router } from '@angular/router';


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
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if(this.currentUser){
      console.log('navigating to board')
      this.router.navigate(['board']
        // , { state: { taskData: this.taskService.taskData } }
      )
    }else{
      console.log('navigating to logjn')
      this.router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    this.userService.currentUserS.subscribe(user => {
      this.currentUser = user;
      this.cdr.detectChanges(); 
    });
  }
  
}
export class TasksModel{

    name: string;
    tasks: Task[]
  
}