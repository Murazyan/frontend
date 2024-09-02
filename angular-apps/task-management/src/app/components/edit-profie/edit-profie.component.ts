import {  Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/repeatPasswordValidator';

@Component({
  selector: 'app-edit-profie',
  templateUrl: './edit-profie.component.html',
  styleUrl: './edit-profie.component.scss'
})
export class EditProfieComponent   {

  protected currentUser :User | null;

  @ViewChild("content", {static: true}) content: ElementRef


  password: FormGroup;

  constructor(
              private userService: UserService,
              private modal: NgbModal,
              private fb: FormBuilder,
              ){
    this.password = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    }, { validator: passwordMatchValidator('newPassword', 'repeatPassword') });
              }

  public open() {
    this.currentUser = this.userService.getLoggedinUser()
    this.modal.open(this.content, {centered: true})
  }


  closeModal() {
    this.modal.dismissAll('Cross click')

  }

  editProfile(form: NgForm) {
    this.currentUser!.name = form.value.name;
    this.currentUser!.surname = form.value.surname;
    this.userService.updateUserInfo(this.currentUser);
  }

  handleFileInput(event: Event, userAvatar: HTMLImageElement) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      for (let i = 0; i < inputElement.files.length; i++) {
        let file = inputElement.files[i];
        const href =  URL.createObjectURL(file);
        this.currentUser!.avatar = href;
        this.userService.updateUserInfo(this.currentUser)
      }
      inputElement.value = '';
    }
  }

  changePassword() {
    const oldPasswordControl = this.password.get('oldPassword');

    const oldPassword = this.password.value.oldPassword;
    const newPassword = this.password.value.newPassword;

    if(this.currentUser?.password !== oldPassword){
      oldPasswordControl?.setErrors({ incorrectPassword: true });
    }else{
      this.currentUser!.password = newPassword;
      this.userService.updateUserInfo(this.currentUser)
      console.log('Form Submitted', this.password.value);
      this.password.reset();
    }


  }
    
}
