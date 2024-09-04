import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizItemListComponent } from './components/quiz-item-list/quiz-item-list.component';


export const routes: Routes = [
    {    
      path: "",
      component: HomeComponent,
      children: [
        {
          path: 'topic/:topicId/quizzess',
          component: QuizItemListComponent
        }
          
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
