import { inject, Injectable } from '@angular/core';
import { ICommentPagination } from '../models/commentsPagination';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageRequest } from '../models/pageRequest';
import { TaskComment } from '../models/taskComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  protected http: HttpClient = inject(HttpClient)


  public commentsResponseBS$ = new BehaviorSubject<ICommentPagination>({
    totalElementCount: 10,
    page: 1,
    limit: 10,
    content: []
  });

  constructor() { }

  public getCommentList(taskId: number, PageRequest: PageRequest) {
    let params = new HttpParams().set('taskId', taskId)
    .set('limit', PageRequest.limit)
    .set('page', PageRequest.page);
    console.log("request", taskId, params)
    this.http.get<ICommentPagination>('/assets/mock/comments.json', {params} ).subscribe(res => {
      this.commentsResponseBS$.next(res);
    })
  }
}
