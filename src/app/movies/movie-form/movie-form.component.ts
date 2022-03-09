import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: ''
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
    this.onSaveChanges.emit(this.form.value);
  }

}
