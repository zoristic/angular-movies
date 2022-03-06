import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-teathers/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-teathers/index-movie-theater/index-movie-theater.component';
import { EditMovieTreaterComponent } from './movies-theaters/edit-movie-treater/edit-movie-treater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  {path:'',component: HomeComponent},

  {path:'genres', component: IndexGenresComponent},
  {path:'genres/create', component: CreateGenresComponent},
  {path:'genres/edit/:id', component: EditGenreComponent},

  {path:'actors', component: IndexActorsComponent},
  {path:'actors/create', component: CreateActorComponent},
  {path:'actors/edit/:id', component: EditActorComponent},

  {path:'movietheaters', component: IndexMovieTheaterComponent},
  {path:'movietheaters/create', component: CreateMovieTheaterComponent},
  {path:'movietheaters/edit/:id', component: EditMovieTreaterComponent},

  {path:'movies/create', component: CreateMovieComponent},
  {path:'movies/edit/:id', component: EditMovieComponent},
  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
