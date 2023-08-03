import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ChangePasswordComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
