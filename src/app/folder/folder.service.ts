import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: HttpClient) { }

  rootURL='/api';
  
  getPets(){
    return this.http.get(this.rootURL);
  }






}
