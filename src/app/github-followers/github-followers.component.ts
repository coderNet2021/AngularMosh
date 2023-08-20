import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import {  combineLatest, switchMap } from 'rxjs';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit{
  followers: any[]=[];
  constructor(private route :  ActivatedRoute ,private service: GithubFollowersService){

  }
  ngOnInit(): void {
    //we combine the 2 observable into one observable using this combineLatest and we
  // pass an array of observables
    let newCombinedObservable = combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(switchMap(combined=>{
let id = combined[0].get('id');
      let page = combined[1].get('page');
      // this.service.getAll({id:id,page:page});
      return this.service.getAll();// we dont want to subscribe to //.subscribe(followers=>{this.followers=followers; console.log(followers)});

    }));
    //we subscribe to the new observable
    // and we do our staff -> we get the data from the server using these route params and optional paramss
    newCombinedObservable.subscribe(followers=>{
      this.followers=followers;

    });



  }

}
