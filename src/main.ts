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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
