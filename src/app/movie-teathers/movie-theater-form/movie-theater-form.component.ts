import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatemap } from 'src/app/utilities/map/cordinate';
import { movieTheatersCreationsDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ) { }

  form: FormGroup | any;

  @Input()
  model: movieTheatersDTO | undefined;

  @Output()
  onSavechanges = new EventEmitter<movieTheatersCreationsDTO>();

  initialCoordinates: coordinatemap[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude:['', {
        validators: [Validators.required]
      }],
      latitude:['', {
        validators: [Validators.required]
      }]
    })
    if(this.model !== undefined){
      this.form.patchValue(this.model),
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }
  onSelectedLocation(cordinates: coordinatemap){
    this.form.patchValue(cordinates);
  }

  saveChanges(){
    this.onSavechanges.emit(this.form.value);
  }

}
