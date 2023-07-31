import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods =[
    {id:1 , name:'Email'},
    {id:2 , name:'Phone'},
    {id:3 , name:'test3'},
    {id:4 , name:'test4'}
  ];
  log(x:any){
    console.log(x);
  }
  submit(f:any){
    console.log(f);
    console.log(f.value);
  }
}
