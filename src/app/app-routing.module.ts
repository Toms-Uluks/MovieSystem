import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { MovieComponent } from './Components/movie/movie.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', component: MoviesListComponent},
    { path: ':id', component: MovieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
