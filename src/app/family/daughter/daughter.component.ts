import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';
import {daughterName} from '../reducer/family.reducer';
@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaughterComponent implements OnInit {
  daughterName:any
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.daughterName = this.store.select(daughterName);
  }
  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:{relationName:'Daughter'}}});
  }
}
