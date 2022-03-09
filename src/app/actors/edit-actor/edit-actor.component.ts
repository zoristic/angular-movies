import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO , actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorDTO = {name: 'Tom Holland', 
  dateOfBirth: new Date(),
  biography: 'default value', 
  picture:'https://pbs.twimg.com/profile_images/1247482752351588352/EgHoUNqQ.jpg'
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params['id']);
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
    
  }

}
