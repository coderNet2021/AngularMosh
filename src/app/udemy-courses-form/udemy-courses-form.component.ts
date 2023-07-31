import { Component } from '@angular/core';

@Component({
  selector: 'app-udemy-courses-form',
  templateUrl: './udemy-courses-form.component.html',
  styleUrls: ['./udemy-courses-form.component.css']
})
export class UdemyCoursesFormComponent {
  categories =[
    {id: 1 , name : 'categorie 1 '},
    {id: 2 , name : 'categorie 2 '},
    {id: 3 , name : 'categorie 3 '},
    {id: 4 , name : 'categorie 4 '},
  ];
  submit(course:any){
console.log(course);
  }
}
