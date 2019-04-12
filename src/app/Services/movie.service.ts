import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  api = "https://api.themoviedb.org/3";
  authKey = "?api_key=683e674e815d9e79d4024c0bd7740655"
  constructor(
    private http: HttpClient
  ) { }

  getNewestMovies(page) {
    return this.http.get(this.api+'/movie/now_playing'+this.authKey+'&language=en-US&page='+page)
  }

  getTopMovies(page) {
    return this.http.get(this.api+'/movie/top_rated'+this.authKey+'&language=en-US&page='+page)
  }

  getUpcomingMovies(page) {
    return this.http.get(this.api+'/movie/upcoming'+this.authKey+'&language=en-US&page='+page)
  }

  getMovie(id) {
    return this.http.get(this.api+'/movie/'+id+this.authKey)
  }
}
