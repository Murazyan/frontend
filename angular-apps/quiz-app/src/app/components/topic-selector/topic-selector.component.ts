import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-selector',
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss'
})
export class TopicSelectorComponent implements OnInit {


  protected topics : Topic [];
  selectedTopicId: string = '0';
  
  constructor(
    private topicService: TopicService,
    private router: Router,
  ) {

  }
  
  
  
  ngOnInit(): void {
    this.topicService.getTopics();
    this.topicService.topicsBS.subscribe(topics => {
      topics.sort(Topic.compareByName);
      this.topics = topics;
    })
  }

  topicSelected(topicId: string) {
    if(topicId==='0') {
      throw new Error('Topic is not selected');
    }

    this.topicService.setSelectedTopic(new Topic(topicId))
    this.router.navigate(['topic/' + topicId + '/quizzess'])
    
  }

}
