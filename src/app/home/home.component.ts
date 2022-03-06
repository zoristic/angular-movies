import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'SpiderMan',
      releaseDate : new Date(),
      price : 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BNjYwYTJjMjQtNTM3OC00YmEwLTg5YzktY2FlNzUwMmNiYWI2XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL75_UY562_CR35,0,380,562_.jpg'
    },
    {
      title: 'Moana',
      releaseDate : new Date('2016-11-14'),
      price : 300.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg'
    }];
    this.moviesFutureReleas=[];
  }

  moviesInTheaters: any;
  moviesFutureReleas: any;

  constructor() { }

}
