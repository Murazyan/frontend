import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quizzess';
import { ActivatedRoute } from '@angular/router';
import { QuizzessService } from '../../services/quizzess.service';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {


  protected questions: Question[];
  protected currentQuestionIndex = 0;
  protected currentQuestion: Question ;

  protected currentScore = 0;
  protected totalScore: number;

  constructor(
    private activatedRout: ActivatedRoute,
    private quizService: QuizzessService

  ){
    this.activatedRout.params.subscribe(paramMap=>{
      const quizId = paramMap['quizId']
      this.quizService.getQuestionData(quizId);
      this.quizService.questionsBS.subscribe(q=>{
        this.questions = q
        this.currentQuestion = this.questions[0];
        this.totalScore = q.reduce((accumulator, question) => accumulator + question.score, 0);
      })
    })
  }



}
