import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../models/task';
import { TaskStatus } from '../../models/taskStatus';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent {


  protected task :Task;

  @ViewChild("content", {static: true}) content: ElementRef


  private modalRef: NgbModalRef;


  constructor(
    private modal: NgbModal,
    private cdr: ChangeDetectorRef,
    private taskService: TaskService,
  ) {
  }

  public open(task: Task) {
    this.task = task
    this.modalRef = this.modal.open(this.content, {centered: true})
  }

  closeModal() {
    this.modal.dismissAll('Cross click')

  }

  getTaskSTatuses(): string[]{
    return  Object.keys(TaskStatus).filter(key => isNaN(Number(key)));
  }

  editTask(editForm: NgForm) {
    console.log('edit task clicked', editForm)
    this.task.title =  editForm.value.title;
    if(this.task.status !=  editForm.value.status){
      const oldTaskList =  this.taskService.taskData.find(t=>  t.name == this.task.status.toLocaleString())?.tasks;
      const taskIndex = oldTaskList? oldTaskList.indexOf(this.task) : -1;
      if (taskIndex > -1) {
          oldTaskList?.splice(taskIndex, 1);
      }
      this.taskService.taskData.find(t=>t.name === editForm.value.status)?.tasks.push(this.task);


    }
    this.task.status =  editForm.value.status;
    this.task.desctioption =  editForm.value.description;
    this.closeModal()
  }



}
