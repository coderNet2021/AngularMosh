import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts :any[]=[];
  private url='http://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient : HttpClient){
httpClient.get<any[]>(this.url).subscribe((response)=>{
  console.log(response);
  this.posts=response;
  console.log(this.posts);
    });
  }

  createPost(inputTitle:HTMLInputElement){
    let post:Post = {id:0,title:inputTitle.value};
    inputTitle.value='';
    this.httpClient.post<Post>(this.url,post).subscribe((response)=>{
      console.log(response);
      post.id=response.id;
      this.posts.splice(0,0,post);
    });
  }

}

 interface Post{
   id:number;
   title:string;
}
