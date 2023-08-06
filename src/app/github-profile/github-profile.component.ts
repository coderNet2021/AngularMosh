import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit{
  constructor(private route : ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      console.log(params);
      let id =params.get('id');
      //in real scenario we want to send the id to get the profile like this :
      // service.getProfile(id);
      console.log(id);
    });
  }

}
