import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css']
})
export class CreateGenresComponent implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit(): void {
    
  }
  saveChanges(genreCreationDTO: genreCreationDTO){
    //...save the genre
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }  

}
