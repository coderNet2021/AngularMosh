import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCoursesFormComponent } from './udemy-courses-form.component';

describe('UdemyCoursesFormComponent', () => {
  let component: UdemyCoursesFormComponent;
  let fixture: ComponentFixture<UdemyCoursesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyCoursesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdemyCoursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
