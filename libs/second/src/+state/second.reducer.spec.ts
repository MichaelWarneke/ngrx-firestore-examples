import { secondReducer } from './second.reducer';
import { secondInitialState } from './second.init';
import { Second } from './second.interfaces';
import { DataLoaded } from './second.actions';

describe('secondReducer', () => {
  it('should work', () => {
    const state: Second = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = secondReducer(state, action);
    expect(actual).toEqual({});
  });
});
