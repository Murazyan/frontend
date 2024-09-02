import { Component, Input, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { EditProfieComponent } from '../edit-profie/edit-profie.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  
  @ViewChild('editProfileModal') editProfile: EditProfieComponent;
  @Input('currentUser') currentUser: User |null | undefined;


  constructor(private userService: UserService){

  }

  logout() {

  this.userService.logout()
  }


  openEditModal() {
    this.editProfile.open()
  }

}
