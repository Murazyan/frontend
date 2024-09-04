import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz, QuizList } from '../models/quizzess';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzessService {
  
  public quizzessBS = new BehaviorSubject<Quiz[]>([]);

  constructor(private http: HttpClient) { }


  getQuizList(topicId: string){   
    this.http.get<QuizList>('/assets/mock/'+topicId+'.quizzess.json').subscribe(ql => {
        this.quizzessBS.next(ql.quizzess);
      })
  }


}
