import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';
import {sonName} from '../reducer/family.reducer';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  sonName:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.sonName = this.store.select(sonName);
  }
  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:{relationName:'Son'}}});
  }

}
