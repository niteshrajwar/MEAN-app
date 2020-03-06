import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieComponent } from './new-movie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

describe('NewPersonComponent', () => {
  let component: NewMovieComponent ;
  let fixture: ComponentFixture<NewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieComponent ],
      imports: [HttpClientModule],
      providers: [AppService, HttpClient, Router]
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
