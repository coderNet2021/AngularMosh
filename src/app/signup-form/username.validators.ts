import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
  static cannotContainSpace( control : AbstractControl) : ValidationErrors | null{
    if((control.value as string).indexOf(' ')>=0)//if we have a space in the username
    return {cannotContainSpace : true};

    return null;
  }
}
