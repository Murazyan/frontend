import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICommentPagination } from '../../models/commentsPagination';
import { CommentService } from '../../services/comment.service';
import { PageRequest } from '../../models/pageRequest';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { filter } from 'rxjs';
import { FormGroup, NgForm } from '@angular/forms';
import { TaskComment } from '../../models/taskComment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-task-full-view',
  templateUrl: './task-full-view.component.html',
  styleUrl: './task-full-view.component.scss'
})
export class TaskFullViewComponent {


  protected comments: ICommentPagination;
  protected commentService: CommentService = inject(CommentService);
  protected taskService: TaskService = inject(TaskService);
  protected userService: UserService = inject(UserService);
  protected commentForm: FormGroup;

  private taskId = '';
  protected task: Task | undefined;
  protected PageRequest = new PageRequest();

  constructor(
    private router: ActivatedRoute
  ) {
    this.comments = <ICommentPagination>{};
    this.commentService.commentsResponseBS$.subscribe(coments => {
      this.comments = coments;
    });

    this.router.params.subscribe( paramMap => {
      this.taskId = paramMap['taskId'];
      this.taskService.getTaskById(this.taskId)
      .subscribe(tasks => {
        this.task =  tasks.find(t=> t.id === +this.taskId)
      });
      this.getCommentsByTaskId(this.taskId);
    })
  }

  getCommentsByTaskId(taskId: any) {
    this.commentService.getCommentList(taskId,  this.PageRequest)
  }

  pageChange(page: number) {
    this.PageRequest.page = page;
    this.getCommentsByTaskId(this.taskId);
  }


  addNewCommetn(form: NgForm) {
    const comment = form.value.newComment;
    const currentUser = this.userService.getLoggedinUser()
    this.comments.content.push(new TaskComment(currentUser?.name + " " + currentUser?.surname, currentUser?.avatar!, comment, new Date().toISOString(), 0));
    form.reset();
  }

}
