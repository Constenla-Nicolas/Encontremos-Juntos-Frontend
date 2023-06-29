/// <reference types="node" />

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
  this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    const loader = new Loader({
     apiKey: `${process.env['MAPS_APP_API_KEY']}`,
    //  apiKey: "AIzaSyCVFs0L4jsFotzVQZOsDihnWB6GiJccXlw",
      version: "weekly",
      
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.614396, lng: -58.4234967 },
        zoom: 10,
        mapTypeId:  "hybrid",
        disableDefaultUI: true,
      });
    });
  }
 
  
}




