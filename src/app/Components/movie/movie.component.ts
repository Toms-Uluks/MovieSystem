import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieService.getMovie(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.movie = res;
    })
  }

}
