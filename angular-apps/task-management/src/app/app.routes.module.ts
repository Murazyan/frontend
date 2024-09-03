import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TaskFullViewComponent } from './components/task-full-view/task-full-view.component';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/board/board.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

export const routes: Routes = [
    {    
      path: "",
      component: HomeComponent,
      children:[
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'maintenance/task/:taskId',
          component: TaskFullViewComponent
        },
        {
          path: 'board',
          component: BoardComponent
        },
        {
          path: 'new-task',
          component: NewTaskComponent
        }
      ]
    }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
