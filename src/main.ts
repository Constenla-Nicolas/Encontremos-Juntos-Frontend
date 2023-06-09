import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Loader } from '@googlemaps/js-api-loader';

if (environment.production) {
  enableProdMode();
}

const loader = new Loader({
  apiKey:"",
  version: "weekly",
  libraries: ["places"]
});

declare global{
 
  interface window{initMap:() => void;}
  
}

function initMap(): void{
  loader.importLibrary('maps').then(({Map})=> [new Map(document.getElementById("map") as HTMLElement,
  {center : {lat:-34.607931,lng: -58.373219},
    zoom: 8,
})]);
}

// Loader l ;
// let map: google.maps.Map;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
