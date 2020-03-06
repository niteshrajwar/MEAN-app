import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { UserService} from  './user.service';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HeaderComponent } from './header/header.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewMovieComponent,
    LoginComponent,
    SignUpComponent,
    MovieHomeComponent,
    MovieDetailsComponent,
    DictionaryComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InlineSVGModule.forRoot()
  ],
  providers: [AppService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
