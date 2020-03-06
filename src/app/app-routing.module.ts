import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    { path: 'movies', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'add', component: NewMovieComponent},
    { path: 'register', component: SignUpComponent},
    {path: 'movie/:movieid', component: MovieDetailsComponent},
    {path: 'profile', component: ProfileComponent},
  //  { path: '', component: AppComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
