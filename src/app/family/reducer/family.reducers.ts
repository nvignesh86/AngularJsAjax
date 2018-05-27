import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState} from './../model/appstate.model';
import { familyReducer} from './family.reducer';
import { Action } from '@ngrx/store';

export const familyReducers: ActionReducerMap<AppState,Action> = {
    family: familyReducer
  };