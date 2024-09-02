import { AfterViewInit, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { TasksModel } from '../home/home.component';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit, AfterViewInit {

   taskData: TasksModel[];
  router: Router =  inject(Router);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)
  taskService: TaskService =  inject(TaskService);
  userService: UserService =  inject(UserService)


  ngOnInit(): void {
    console.log('init called ')
    this.taskService.getTasksByUser(this.userService.getLoggedinUser())

    this.taskData = this.taskService.taskData
  }

  ngAfterViewInit(): void {

    this.cdr.detectChanges(); 
  }

}
