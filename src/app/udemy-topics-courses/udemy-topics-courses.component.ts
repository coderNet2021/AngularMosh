import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-udemy-topics-courses',
  templateUrl: './udemy-topics-courses.component.html',
  styleUrls: ['./udemy-topics-courses.component.css']
})
export class UdemyTopicsCoursesComponent {
form = new FormGroup({
  topics : new FormArray([])// [] will contain all the topics
});
addTopic(topic:HTMLInputElement){
(this.topics).push(new FormControl(topic.value));
topic.value='';
}
removeTopic(topic : any){
let index = this.topics.controls.indexOf(topic);
this.topics.removeAt(index);
}

get topics() : FormArray{
  return this.form.get('topics') as FormArray;
}
}
