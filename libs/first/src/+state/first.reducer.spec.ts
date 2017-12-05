import { firstReducer } from './first.reducer';
import { firstInitialState } from './first.init';
import { First } from './first.interfaces';
import { DataLoaded } from './first.actions';

describe('firstReducer', () => {
  it('should work', () => {
    const state: First = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = firstReducer(state, action);
    expect(actual).toEqual({});
  });
});
