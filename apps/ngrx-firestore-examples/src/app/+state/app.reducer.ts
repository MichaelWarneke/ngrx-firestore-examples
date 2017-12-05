import {App} from './app.interfaces';
import {AppAction} from './app.actions';

export function appReducer(state: App, action: AppAction): App {
  switch (action.type) {

    default: {
      return state;
    }
  }
}
