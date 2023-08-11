/// <reference types="node" />

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FolderService } from './folder.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 
  constructor(private petService : FolderService) {}
  




  ngOnInit() {
 
    
    const loader = new Loader({
    //  apiKey: `${process.env['MAPS_APP_API_KEY']}`,
     apiKey: "AIzaSyCVFs0L4jsFotzVQZOsDihnWB6GiJccXlw",
      version: "weekly",
      
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.614396, lng: -58.4234967 },
        zoom: 18,
        // mapTypeId:  "hybrid",
        disableDefaultUI: true,
      });
    });
   
    
  }
 

  pets: any[] = [];
  petCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {

    // this.folderService.addpet(this.petForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('message::::', data);
    //   this.petCount = this.petCount + 1;
    //   console.log(this.petCount);
    //   this.petForm.reset();
    // });
  }

  getAllPets() {
    
    this.petService.getPets().pipe(takeUntil(this.destroy$)).subscribe(petsArray =>
       console.log(petsArray) );
        
       
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  

}




