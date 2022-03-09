import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = {title:'Spider-Man', inTheaters: true, summary:'whatever',
releaseDate: new Date(), trailer:'ABCD', poster:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {      

    });
  }
  saveChanges(movieCreationDTO: movieCreationDTO){

  }

}
