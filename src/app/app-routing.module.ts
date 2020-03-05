import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
    { path: 'movies', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'add', component: NewPersonComponent},
    { path: 'register', component: SignUpComponent},
    {path: 'movie/:movieid', component: MovieDetailsComponent},
  //  { path: '', component: AppComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
