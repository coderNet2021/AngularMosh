import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
  static cannotContainSpace( control : AbstractControl) : ValidationErrors | null{
    if((control.value as string).indexOf(' ')>=0)//if we have a space in the username
    return {cannotContainSpace : true};

    return null;
  }

  static shouldBeUnique(control: AbstractControl):ValidationErrors | null{
    //if the username is mosh we are going to assume that it is taken, otherwise it is valid
    setTimeout(()=>{
      console.log('ok');
    })
    if(control.value==='mosh')
      return {shouldBeUnique : true};

      return null;
  }
}
