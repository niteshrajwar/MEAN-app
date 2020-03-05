import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewPersonComponent } from './new-person/new-person.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { UserService} from  './user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPersonComponent,
    LoginComponent,
    SignUpComponent,
    MovieHomeComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
