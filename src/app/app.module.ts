import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UnmarkComponent } from './unmark/unmark.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [AppComponent,UnmarkComponent,ListComponent,ContactComponent,AddComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
