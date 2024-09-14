import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz, QuizList } from '../models/quizzess';
import { HttpClient } from '@angular/common/http';
import { Question, QuestionList } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizzessService {
  public quizzessBS = new BehaviorSubject<Quiz[]>([]);
  public questionsBS = new BehaviorSubject<Question[]>([]);

  constructor(private http: HttpClient) { }

  getQuizList(topicId: string){   
    this.http.get<QuizList>('/assets/mock/'+topicId+'.quizzess.json').subscribe(ql => {
        this.quizzessBS.next(ql.quizzess);
      })
  }

  getQuestionData(quizId: string){   
    this.http.get<QuestionList>('/assets/mock/'+quizId+'.questionData.json').subscribe(ql => {
        this.questionsBS.next(ql.questions.map(o => Object.assign(new Question(o.time), o)));
      })
  }

}
