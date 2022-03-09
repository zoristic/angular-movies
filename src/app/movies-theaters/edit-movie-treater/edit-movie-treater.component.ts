import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationsDTO, movieTheatersDTO } from 'src/app/movie-teathers/movie-theaters.model';

@Component({
  selector: 'app-edit-movie-treater',
  templateUrl: './edit-movie-treater.component.html',
  styleUrls: ['./edit-movie-treater.component.css']
})
export class EditMovieTreaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ) { }

  model: movieTheatersDTO = {
    name:'Agora', latitude: 18.483541251864438, longitude: -69.93927597999574
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {      

    });
  }

  saveChanges( movieTheater: movieTheatersCreationsDTO){

  }

}
