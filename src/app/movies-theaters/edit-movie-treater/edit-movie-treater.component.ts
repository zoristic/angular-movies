import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie-treater',
  templateUrl: './edit-movie-treater.component.html',
  styleUrls: ['./edit-movie-treater.component.css']
})
export class EditMovieTreaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {      

    });
  }

}
