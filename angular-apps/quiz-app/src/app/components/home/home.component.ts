import { Component } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(protected topicService: TopicService){
    
  }
}
