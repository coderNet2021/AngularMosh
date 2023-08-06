import { Component, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './likeComponentTwitter/like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCoursesFormComponent } from './udemy-courses-form/udemy-courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UdemyTopicsCoursesComponent } from './udemy-topics-courses/udemy-topics-courses.component';
import { ChangePasswordComponentComponent } from './change-password-component/change-password-component.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TitlecaseComponent,
    SignupFormComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    UdemyCoursesFormComponent,
    UdemyTopicsCoursesComponent,
    ChangePasswordComponentComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',component :HomeComponent},
      { path:'followers',component :GithubFollowersComponent},
      { path:'followers/:username',component :GithubProfileComponent},
      { path:'posts',component :PostsComponent},
      { path:'**',component :NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide : ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
