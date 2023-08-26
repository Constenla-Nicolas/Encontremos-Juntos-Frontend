/// <reference types="node" />

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Subject } from 'rxjs';
import { AppService } from '../app.service';
import { petModel } from '../modelo/petModel';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(private petService : AppService) { }
  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  pets: any [] =[];
  pet: petModel[] = [];

//   ngOnInit() {
// this.mapLoader()
//   }
  ngOnInit() {
    // this.petService.getPets().pipe()
    //           .subscribe(result => { 
    //                                 this.pet = result;
    //                                 this.pagedList = this.personList;
    //                                 this.length = this.personList.length; 
    //                              });

    // this.store.dispatch(FetchPerson());

    // this.petService.getPets().pipe(takeUntil(this.destroy$)).subscribe(petsArray =>
    //   this.pets=this.pets.concat(petsArray) )

//  }




    }





  loadPets():void {
    this.petService.lista().subscribe(
      {next:response=>this.pets=response}
    ) 
    console.log(this.pets.length)
    // if (this.pets.length==0) {
    //  this.loadPets() 
    // }
    
  }
  
  mapLoader(){
        
    const loader = new Loader({
      apiKey: `${process.env['MAPS_APP_API_KEY']}`,
      version: "weekly",
      
    });
    let map;
    const initialPosition = {lat: -34.614396, lng: -58.4234967};
 
    loader.importLibrary("maps").then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: initialPosition,
        zoom: 18,
        // mapTypeId:  "hybrid",
        disableDefaultUI: true,
      });
      new google.maps.Marker({
        position: {lat:-34.614386, lng:-58.4234967},
        map,
        title: "hello world"
      })
    });
  }

}




