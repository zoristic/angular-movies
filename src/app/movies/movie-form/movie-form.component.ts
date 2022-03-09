import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieDTO , movieCreationDTO } from '../movies.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  @Input()
  model: movieDTO | any;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedgenres: multipleSelectorModel[]= [
    {key:1, value: 'Drama'},
    {key:2, value: 'Action'},
    {key:3, value: 'Comedy'},
  ]; 

  selectedGenres: multipleSelectorModel[]= [];

  nonSelectedMovieTheaters: multipleSelectorModel[]= [
    {key:1, value: 'Agora'},
    {key:2, value: 'Sabmil'},
    {key:3, value: 'Megacentrol'}
  ];

  selectedMovieTheaters: multipleSelectorModel[]=[];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds:'',
      movieTheatersIds: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string){
    this.form.get('summary').setValue(content);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);
    
    this.onSaveChanges.emit(this.form.value);
  }

}
