import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TopicService {

  private selectedTopic: Topic;
  // private _selectedTopic: Topic;
  // public get selectedTopic(): Topic {
  //   return this._selectedTopic;
  // }
  // public set selectedTopic(value: Topic) {
  //   this._selectedTopic = value;
  // }
  
  public topicsBS = new BehaviorSubject<Topic[]>([]);

  constructor(private http: HttpClient) { }


  getTopics(){   
    this.http.get<Topic[]>('/assets/mock/topics.json').subscribe(topics => {
        this.topicsBS.next(topics);
      })
  }

  setSelectedTopic(topic: Topic): void{
    this.selectedTopic = topic;
  }

  getSelectedTopic(): Topic{
    return this.selectedTopic;
  }
}
