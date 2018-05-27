import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';
import {brotherName} from './../reducer/family.reducer';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrotherComponent implements OnInit {
  brotherName:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.brotherName = this.store.select(brotherName);
  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:{relationName:'Brother'}}});
  }
}
