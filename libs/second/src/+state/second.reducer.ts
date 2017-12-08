import { EntityState, createEntityAdapter } from '@ngrx/entity';

import {Second} from './second.interfaces';
import {SecondActionTypes, SecondAction} from './second.actions';
import { FakeData } from '@ngrx-firestore-examples/db';
import { createFeatureSelector } from '@ngrx/store';
import { secondInitialState } from '@ngrx-firestore-examples/second/src/+state/second.init';


// Entity adapter
export const secondAdapter = createEntityAdapter<FakeData>();
export interface State extends EntityState<FakeData> {}

export const initialState: State = secondAdapter.getInitialState(secondInitialState);

export function secondReducer(state: State = initialState, action: SecondAction) {
  switch (action.type) {
    case SecondActionTypes.SECOND_DATA_ADDED: 
      return secondAdapter.addOne(action.payload, state);

    case SecondActionTypes.SECOND_DATA_MODIFIED:
      return secondAdapter.updateOne(
      {
        id: action.payload.id,
        changes: action.payload
      },
      state
    );

    case SecondActionTypes.SECOND_DATA_REMOVED:
      return secondAdapter.removeOne(action.payload.id, state);

    default: {
      return state;
    }
  }
}

// Create the default selectors
export const getSecondState = createFeatureSelector<State>('second');
export const { selectIds: selectSecondIds, selectEntities: selectSecondEntities, selectAll: selectSecondAll, selectTotal: selectSecondTotal } = secondAdapter.getSelectors(getSecondState);
