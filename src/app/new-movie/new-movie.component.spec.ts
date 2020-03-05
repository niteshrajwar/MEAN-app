import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieComponent } from './new-movie.component';

describe('NewPersonComponent', () => {
  let component: NewMovieComponent ;
  let fixture: ComponentFixture<NewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
