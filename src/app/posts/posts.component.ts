import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts :any[]=[];
  constructor(httpClient : HttpClient){
httpClient.get<any[]>('http://jsonplaceholder.typicode.com/posts').subscribe((response)=>{
  console.log(response);
  this.posts=response;
  console.log(this.posts);
    });
  }

}
