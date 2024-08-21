import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  protected currentUser :User | null;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.currentUser = this.userService.getLoggedinUser()
  }

}
