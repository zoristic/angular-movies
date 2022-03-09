import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-actors-autocomplite',
  templateUrl: './actors-autocomplite.component.html',
  styleUrls: ['./actors-autocomplite.component.css']
})
export class ActorsAutocompliteComponent implements OnInit {

  constructor() { }

  control: FormControl =new FormControl();

  actors = [
    {name: 'Tom Holland', picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {name: 'Tom Hanks', picture: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg'},
    {name: 'Samuel L Jackson', picture: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg'}
  ];

  selectedActors = [];

  ngOnInit(): void {
  }

  optionnSelected(event: MatAutocompleteSelectedEvent){

    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    
  }

}
