import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup| any;
  genres= [{id:1, name: 'Drama'}, {id:2, name: 'Action'}];
  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BNjYwYTJjMjQtNTM3OC00YmEwLTg5YzktY2FlNzUwMmNiYWI2XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UY562_CR35,0,380,562_.jpg'},
    {title: 'Moana', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg'},
    {title: 'Inception', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg'}
  ];

  originalMovies = this.movies;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      genreId: 0,
      upcomingReleases: false,
      inTheater: false
    });
    this.form.valueChanges
    .subscribe((values:any) =>{  
      this.movies = this.originalMovies;
      this.filterMovies(values);    

    });

  }
  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);

    }
  }

  clearForm() {
    this.form.reset();

  }

}
