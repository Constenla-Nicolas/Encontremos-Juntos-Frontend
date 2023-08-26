import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';
import { Subject } from 'rxjs';
import { petModel } from '../modelo/petModel';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  constructor(private petService : AppService) {}
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
  pets: petModel[] = [];
  ngOnInit() {
    this.loadPets() 
 
  }
 

    petToBlock(x:any){
      this.pets=x
      console.log(this.pets)
    }

      loadPets():void {
      this.petService.lista().subscribe(
        {next:response=>this.petToBlock(response)}
      ) 
    }



   
}
