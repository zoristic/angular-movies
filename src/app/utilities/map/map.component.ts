import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, tileLayer, LeafletMouseEvent, marker, Marker} from 'leaflet';
import { coordinatemap } from './cordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatemap[]= [];


  @Output()
  onSelectedLocation = new EventEmitter<coordinatemap>();


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18, 
        attribution:'Angular Movies'})
  ],
  zoom:13,
  //center: latLng(18.473564631048617, -69.93999481201173)
  center: latLng(44.87227912201118, 18.813056945800785)

  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(latitude,longitude);
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
    this.onSelectedLocation.emit({latitude,longitude});
  }

}
