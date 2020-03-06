import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule],
      providers: [AppService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call function getInfo', () => {
    component.getInfo('http://localhost:8080/persons');
  })
  it('should call function movieFilter', () => {
    component.movieFilter('Comedy');
  })
  it('should call function movieFilter negative case', () => {
    component.movieFilter('');
  })
  it('should call function search', () => {
    component.search('');
  })
});
