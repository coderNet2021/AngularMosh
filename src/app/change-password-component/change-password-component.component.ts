import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password-component',
  templateUrl: './change-password-component.component.html',
  styleUrls: ['./change-password-component.component.css']
})
export class ChangePasswordComponentComponent {
  form : FormGroup;
  constructor(fb:FormBuilder){
    this.form=fb.group({
      oldPassword:['',Validators.required,PasswordValidators.validOldPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    }, {
      validator : PasswordValidators.passwordShouldMatch
    });
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
