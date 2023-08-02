import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyTopicsCoursesComponent } from './udemy-topics-courses.component';

describe('UdemyTopicsCoursesComponent', () => {
  let component: UdemyTopicsCoursesComponent;
  let fixture: ComponentFixture<UdemyTopicsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyTopicsCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdemyTopicsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
