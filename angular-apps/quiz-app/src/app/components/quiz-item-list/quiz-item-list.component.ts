import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../../models/topic';
import { QuizzessService } from '../../services/quizzess.service';
import { Quiz } from '../../models/quizzess';

@Component({
  selector: 'app-quiz-item-list',
  templateUrl: './quiz-item-list.component.html',
  styleUrl: './quiz-item-list.component.scss'
})
export class QuizItemListComponent implements OnInit {

  protected quizzess: Quiz [];
  
  constructor( 
    private topicService: TopicService,
    private activatedRouter: ActivatedRoute,
    private quizzessService: QuizzessService,

  ){

  }
  
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(paramMap=>{
      const topicId = paramMap['topicId'];
      this.topicService.setSelectedTopic(new Topic(topicId));
      this.quizzessService.getQuizList(topicId);
      this.quizzessService.quizzessBS.subscribe(quizzess=>
        this.quizzess = quizzess)
      
    })
  }

}
