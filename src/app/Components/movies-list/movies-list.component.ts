import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';
import { PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  pageEvent: PageEvent;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getNewest(1);
  }

  getData(page) {
  }
  
  getNewest(page) {
    this.movieService.getNewestMovies(page).subscribe(res => {
      this.movies = res;
    })
  }

  getTop(page) {
    this.movieService.getTopMovies(page).subscribe(res => {
      this.movies = res;
    })
  }

  getUpcoming(page) {
    this.movieService.getUpcomingMovies(page).subscribe(res => {
      this.movies = res;
    })
  }

}
