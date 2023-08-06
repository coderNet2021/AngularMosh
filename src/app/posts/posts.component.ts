import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
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
    this.service.getAll().subscribe((posts)=>{
      console.log(posts);
      this.posts=posts;
      console.log(this.posts);
        }
        //here we deleted the error section , to let the error propagate the
        );
  }

  createPost(inputTitle:HTMLInputElement){
    let post:Post = {id:0,title:inputTitle.value};
    inputTitle.value='';
    this.service.create(post).subscribe((newPost)=>{
      console.log(newPost);
      post.id=newPost.id;
      this.posts.splice(0,0,post);
    },(error:AppError)=>{
      if(error instanceof BadInput){//bad request

        //this.form.setErrors(error.originalError);
      }
      else{

       throw error;
      }
    });
  }

  updatePost(post:Post){
    this.service.update(post).subscribe((updatedPost)=>{
      console.log(updatedPost);
    }
    //delete the error block to hit the global error
    );
  }

  deletePost(post:Post){
    this.service.delete(post.id).subscribe(()=>{
      //console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error: AppError)=>{
      if(error instanceof NotFoundError)//not found
        alert('this post has already been deleted');
      else{
        throw error;
      }
    });
  }

}

 interface Post{
   id:number;
   title:string;
}
