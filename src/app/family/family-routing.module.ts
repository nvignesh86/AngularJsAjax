import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotherComponent } from './mother/mother.component';
import { FatherComponent } from './father/father.component';
import {BrotherComponent} from './brother/brother.component';
import {SpouseComponent} from './spouse/spouse.component';
import {DaughterComponent} from './daughter/daughter.component';
import {SonComponent} from './son/son.component';
import {FamilyComponent} from './family.component';


const routes: Routes = [
  {path:'',redirectTo:'/family/members',pathMatch:'full'},  
  {path:'members',component:FamilyComponent ,
      children:[
        {path:'family/members', redirectTo:'/family/members/mother', pathMatch:'full'},
        {path:'mother',component:MotherComponent},
        {path:'father',component:FatherComponent},
        {path:'brother',component:BrotherComponent},
        {path:'spouse',component:SpouseComponent},
        {path:'daughter',component:DaughterComponent},
        {path:'son',component:SonComponent},
      ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
export const FamilyRoutingComponent = [FamilyComponent,MotherComponent,FatherComponent];