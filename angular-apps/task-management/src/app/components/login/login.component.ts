import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {




  protected signInForm = true
  protected loginForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router
  ){

  }

  openSignUpForm() {
    this.signInForm = false;
  }

  openSignInForm() {
    this.signInForm = true;
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }




  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.userService.getUserByEmailAndPassword(email, password)
      .then(
        (user)=>{
          this
          user.forEach(us=> us?.isAdmin ? this.router.navigate(['adminHome']) : this.router.navigate(['userHome']) )
        },
        (error)=>{
          console.log('login error')
        }
      )
    }else{
      console.log('invalid login form')
    }
  }

  

  register() {
  }

}
