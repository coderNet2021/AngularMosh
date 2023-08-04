import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient ) { }

  private url='http://jsonplaceholder.typicode.com/posts';

  getPosts(){
    return this.httpClient.get<any[]>(this.url);
  }

  createPost(post:any){
    return this.httpClient.post<any>(this.url,post)
  }

  updatePost(post:any){
    return this.httpClient.patch<any>(this.url+'/'+post.id,{isRead:true})
  }

  deletePost(id:any){
return this.httpClient.delete<any>(this.url+'/'+id)
  }

}
