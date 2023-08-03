import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(httpClient : HttpClient){

  }

}
