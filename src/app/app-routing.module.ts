import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FamilyComponent } from './family/family.component';

const routes: Routes = [
  {path:'', redirectTo:'/family',pathMatch:'full'},
  {path:'family',loadChildren:"./family/family.module#FamilyModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
