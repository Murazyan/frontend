import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  protected loginForm:  FormGroup;


  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])  
      })
    }
  
  


  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      // this.authService.login(this.loginForm.value)
      // .subscribe((data: any) => {
      //   if(this.authService.isLoggedIn()){
      //     this.router.navigate(['/admin']);
      //   }
      //   console.log(data);
      // });
    }
  }

}
