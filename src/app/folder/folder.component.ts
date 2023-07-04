import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FolderService } from './folder.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private folderService: FolderService) {}

  title = 'angular-nodejs-example';

  // petForm = new FormGroup({
  //   firstName: new FormControl('', Validators.nullValidator() && Validators.required),
  //   lastName: new FormControl('', Validators.nullValidator() && Validators.required),
  //   email: new FormControl('', Validators.nullValidator() && Validators.required)
  // });

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
    // this.folderService.getPets().pipe(takeUntil(this.destroy$)).subscribe((pets: any[]) => {
    //     this.pets = pets;
    // });
    this.folderService.getPets().pipe(takeUntil(this.destroy$)).subscribe(petsArray =>
       this.pets=this.pets.concat(petsArray) )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}