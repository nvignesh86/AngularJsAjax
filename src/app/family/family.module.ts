import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatToolbarModule,MatButtonModule,MatGridListModule} from '@angular/material';
//import {StoreModule} from '@ngrx/store';

import { FamilyRoutingModule,FamilyRoutingComponent } from './family-routing.module';
import { BrotherComponent } from './brother/brother.component';
import { SpouseComponent } from './spouse/spouse.component';
import { DaughterComponent } from './daughter/daughter.component';
import { SonComponent } from './son/son.component';
//import {familyReducers} from './reducer/family.reducers';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    //StoreModule.forFeature('family',familyReducers),
  ],
  declarations: [FamilyRoutingComponent, BrotherComponent, SpouseComponent, DaughterComponent, SonComponent]
})
export class FamilyModule { 
  constructor(private router:Router){
    this.router.navigateByUrl('/family');    
  }
}
