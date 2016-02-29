import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { Map } from 'esri';

@Component({
    selector: 'esri-map',
    template: '<div><ng-content></ng-content></div>'
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();
  
  map: any;
  
  constructor(private elRef:ElementRef) {}
  
  ngOnInit() {
    // create the map
    this.map = new Map(this.elRef.nativeElement.firstChild, {
      basemap: "gray",
      center: [-97, 38], // lon, lat
      zoom: 5
    });
    
    // emit map loaded event once loaded
    this.map.on('load', () => {
      this.mapLoaded.next(this.map);      
    });
  }
}