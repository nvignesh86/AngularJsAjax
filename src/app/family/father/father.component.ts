import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store'
import { AppState } from '../model/appstate.model';
import {fatherName} from './../reducer/family.reducer';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherComponent implements OnInit {
  fatherName:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.fatherName = this.store.select(fatherName);
  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:{relationName:'Father'}}});
  }

}
