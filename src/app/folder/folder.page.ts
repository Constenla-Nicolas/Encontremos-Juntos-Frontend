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
  locations: any []=[];
  pets: any [] =[];
  pet: petModel[] = [];
  dataloaded=false;

  constructor(private petService : AppService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }



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
this.petService.lista().pipe().subscribe((data: any) => {
  console.log("primer log "+this.pets.length);
  this.pets = data;
  console.log("segundo log "+this.pets.length);
  this.dataloaded=true;
  this.loadlocation()
  this.mapLoader()
  console.log(this.pets[0])

});
 
 
 
    }

  loadlocation() {
     this.petService.getLocations().pipe().subscribe((data:any)=>{
      this.locations=data;
      console.log(data);
     })
  }

    getonePet(){
      this.petService.getSpecificPet(6).pipe().subscribe((data:any)=>{
        console.log(data);
      });
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
        position: {lat:this.locations[1].la,lng:this.locations[1].lo},// {lat:-34.614386, lng:-58.4234967},
        map,
        title: "hello world"
      })
    });
  }

}




