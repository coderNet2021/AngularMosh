import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts :any[]=[];

  constructor(private service : PostService){

  }
  ngOnInit(): void {
    this.service.getPosts().subscribe((response)=>{
      console.log(response);
      this.posts=response;
      console.log(this.posts);
        },(error)=>{
          console.log(error);
          alert('an Unexpected error occured - get');
        });
  }

  createPost(inputTitle:HTMLInputElement){
    let post:Post = {id:0,title:inputTitle.value};
    inputTitle.value='';
    this.service.createPost(post).subscribe((response)=>{
      console.log(response);
      post.id=response.id;
      this.posts.splice(0,0,post);
    },(error:Response)=>{
      if(error.status===400){//bad request

        //this.form.setErrors(error.json());
      }
      else{

        console.log(error);
        alert('an Unexpected error occured - post');
      }
    });
  }

  updatePost(post:Post){
    this.service.updatePost(post).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
      alert('an Unexpected error occured - update');
    });
  }

  deletePost(post:Post){
    this.service.deletePost(post.id).subscribe((response)=>{
      //console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error: Response)=>{
      if(error.status===404)//not found
        alert('this post has already been deleted');
      else{
        console.log(error);
        alert('an Unexpected error occured - delete');
      }
    });
  }

}

 interface Post{
   id:number;
   title:string;
}
