import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quizzess';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrl: './quiz-item.component.scss'
})
export class QuizItemComponent {


  @Input('quiz') quiz : Quiz

  constructor(private router: Router){

  }

  startQuiz(quiz: Quiz) {
    this.router.navigate(['quiz/'+quiz.id])
  }
    

}
