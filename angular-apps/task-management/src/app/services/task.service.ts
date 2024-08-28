import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../apiUrl';
import { BehaviorSubject } from 'rxjs';
import { TasksModel } from '../components/home/home.component';
import { TaskStatus } from '../models/taskStatus';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 

  public tasksBS$ = new BehaviorSubject<Task[]>([]);

  readonly taskData: TasksModel[] = [
    {
      name: TaskStatus.NEW,
      tasks: []
    },
    {
      name: TaskStatus.IN_PROGRESS,
      tasks: []
    },
    {
      name: TaskStatus.DONE,
      tasks: []
    },
    {
      name: TaskStatus.BLOCKED,
      tasks: []
    }
  ];


  constructor(private http: HttpClient) { }


  getTasksByUser(user: User| null){
    this.http.get<Task[]>(ApiUrl.TASKS_BY_USER).subscribe(tasks=>{
     this.initTaskData(tasks)
    })
  }

   
  getTaskById(taskId: string) {
    return  this.http.get<Task[]>(ApiUrl.TASK_BY_ID)
  }

  initTaskData(tasks: Task[]){
    this.taskData.forEach(t => t.tasks= []);
    console.log(tasks)
    tasks.forEach(t => {
      this.taskData.find(tt => tt.name === t.status.toString())?.tasks.push(t);
    });
  }
}
