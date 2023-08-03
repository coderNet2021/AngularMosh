import { AbstractControl } from "@angular/forms";

export class PasswordValidators{
  static validOldPassword(control: AbstractControl){
    return new Promise((resolve)=>{
      if(control.value!=='1234'){
        resolve({invalidOldPassword : true});
      }
      else
        resolve(null);
    });
  }

  //we want to apply this validator at the form level
  //bcz we want to compare 2 fields -> we should see the form as a global
  static passwordShouldMatch(control:AbstractControl){
    //form level
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if(newPassword?.value !==confirmPassword?.value){
return {notMatchPasswords: true};
    }
    return null;

  }
}
