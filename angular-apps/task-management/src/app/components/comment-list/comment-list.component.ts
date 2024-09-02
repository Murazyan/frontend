import { Component, Input } from '@angular/core';
import { TaskComment } from '../../models/taskComment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  
  @Input() items: TaskComment[] = []
}

