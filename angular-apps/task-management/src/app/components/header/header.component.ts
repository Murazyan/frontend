import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private userService: UserService){

  }

  logout() {

  this.userService.logout()
  }

  @Input('currentUser') currentUser: User |null | undefined;

}
