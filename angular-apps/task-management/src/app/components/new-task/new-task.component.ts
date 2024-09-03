import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IListItem, IUserPagination, UserItem } from '../../models/IListItem';
import { PageRequest } from '../../models/pageRequest';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {


  protected users: IUserPagination

  private usersPageRequest = new PageRequest();
  private searchTxt = '' ;
  private selectedUser: UserItem;



  constructor(protected taskService: TaskService,
              protected userService: UserService,
              private router: ActivatedRoute, 
              private route: Router
            ){
    this.users = <IUserPagination>{};
    this.userService.getUserList( '', this.usersPageRequest)
    this.userService.usersResponseBS.subscribe(users => {
      this.users = users;
    })

  }

  addNewTask(taskForm: NgForm) {
    const newTask = taskForm.value;
    
    console.log('taskForm ', taskForm.value)
    this.route.navigate(['board'])
  }


  onUserSearch(event: string) {

    this.searchTxt = event;
    this.userService.getUserList( this.searchTxt, this.usersPageRequest);
  }


  onUserSelect(event: IListItem) {

    this.selectedUser = <UserItem>event;
    this.restoreFiledDropDownState();
  }

  onUserDropDownScroll() {
     this.usersPageRequest.page++;
     console.log('trying to get data for page: ', this.usersPageRequest)
     this.userService.getUserList( this.searchTxt, this.usersPageRequest, true)
 }

 private restoreFiledDropDownState() {
  this.searchTxt = '';
  this.usersPageRequest= new PageRequest();
}
}
