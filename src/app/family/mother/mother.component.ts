import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';
import {motherName} from './../reducer/family.reducer';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotherComponent implements OnInit {
  motherName : any;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.motherName = this.store.select(motherName);
  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:{relationName:'Mother'}}});
  }

}
