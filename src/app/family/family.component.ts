import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router'
import {Store,select} from '@ngrx/store';
import { Observable } from 'rxjs';
import {AppState} from './model/appstate.model';
import {getMember,getRelation} from './reducer/family.reducer';
import {FamilyService} from './family.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamilyComponent implements OnInit {
  
  member:Observable<any>; 
  relation:Observable<any>; 

  constructor(private router:Router
              ,private store:Store<AppState>
              ,private familyService:FamilyService
  ) { 
    this.router.navigateByUrl('/family/members/mother');
  }

  ngOnInit() {
    console.log("test");
    this.relation = this.store.select(getRelation);
    this.member = this.store.select(getMember);
    
    this.member.subscribe((member)=>{
      console.log("this.member$:::",member);
    });

    this.store.pipe(select(getMember)).subscribe((state)=>{
        console.log("pipe filter subscibe",state);
    });

    
    this.store.subscribe((state)=>{
      console.log("insider sub",state);
      //console.log("insider sub",this.store.select(getMember));
      //this.member = state.family.member;
    })
    
    //this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Father'}});

    //console.log("Store Data:::",this.store.select<AppState>(state=>state.appState.member));

    /*this.store.select<AppState>((state:AppState)=>{
      console.log("State Obj",state);
      return state.appState.member;
    });*/
   
    this.familyService.getFamilyData().subscribe((res)=>{
      res[0].relationName='Mother';
      this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:res[0]}});
    });
  }

  navigateToMember(member){
    this.router.navigateByUrl("/family/members/"+member)
  }

}
