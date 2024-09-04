import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizItemListComponent } from './components/quiz-item-list/quiz-item-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CanStartQUiz } from './components/guard/canStartQuiz.guard';


export const routes: Routes = [
    {    
      path: "",
      component: HomeComponent,
      children: [
        {
          path: 'topic/:topicId/quizzess',
          component: QuizItemListComponent
        },
        {
          path: 'quiz/:quizId',
          component: QuizComponent,
          canActivate: [CanStartQUiz],
        }
          
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
