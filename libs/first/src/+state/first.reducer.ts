import { EntityState, createEntityAdapter } from '@ngrx/entity';

import {First} from './first.interfaces';
import {FirstActionTypes, FirstAction} from './first.actions';
import { FakeData } from '@ngrx-firestore-examples/db';
import { createFeatureSelector } from '@ngrx/store';
import { firstInitialState } from '@ngrx-firestore-examples/first/src/+state/first.init';


// Entity adapter
export const firstAdapter = createEntityAdapter<FakeData>();
export interface State extends EntityState<FakeData> {}

export const initialState: State = firstAdapter.getInitialState(firstInitialState);

export function firstReducer(state: State = initialState, action: FirstAction) {
  switch (action.type) {
    case FirstActionTypes.FAKE_DATA_ADDED: 
      return firstAdapter.addOne(action.payload, state);

    case FirstActionTypes.FAKE_DATA_MODIFIED:
      return firstAdapter.updateOne(
      {
        id: action.payload.id,
        changes: action.payload
      },
      state
    );

    case FirstActionTypes.FAKE_DATA_REMOVED:
      return firstAdapter.removeOne(action.payload.id, state);

    default: {
      return state;
    }
  }
}

// Create the default selectors
export const getFirstState = createFeatureSelector<State>('first');
export const { selectIds: selectFirstIds, selectEntities: selectFirstEntities, selectAll: selectFirstAll, selectTotal: selectFirstTotal } = firstAdapter.getSelectors(getFirstState);
