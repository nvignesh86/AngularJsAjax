import { AppState} from './../model/appstate.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const familyReducer=(state={member:{name:'Vignesh Nagarajan',ralationName:'Mother'}},action:any):any=>{
    switch(action.type){
        case 'UPDATE_MEMBER':
            action.payload.member.relationName = state.member.name + "'s " + action.payload.member.relationName;
            let member = Object.assign({},state.member,action.payload.member);
            //state.member.ralationName = state.member.name + "'s " + action.payload.member.relationName
            return Object.assign({},state,{member:member});
        default:
            return state;
    }
}


export const getFamilyState = createFeatureSelector<any>('family'); 

export const getMember = createSelector(
    getFamilyState, 
    (state: any) => state.member.name
);

export const getRelation = createSelector(
    getFamilyState, 
    (state: any) => state.member.relationName
);

export const motherName = createSelector(
    getFamilyState, 
    (state: any) => state.member.mother
);

export const fatherName = createSelector(
    getFamilyState, 
    (state: any) => state.member.father
);

export const brotherName = createSelector(
    getFamilyState, 
    (state: any) => state.member.brother
);

export const spouseName = createSelector(
    getFamilyState, 
    (state: any) => state.member.spouse
);

export const daughterName = createSelector(
    getFamilyState, 
    (state: any) => state.member.daughter
);

export const sonName = createSelector(
    getFamilyState, 
    (state: any) => state.member.son
);