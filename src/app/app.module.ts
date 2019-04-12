import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSelectModule} from '@angular/material';
import { MovieComponent } from './Components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
