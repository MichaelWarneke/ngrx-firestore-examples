import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {AuthState} from './auth.interfaces';
import { AuthActionTypes, Login } from './auth.actions';
import { AuthDbService } from '@ngrx-firestore-examples/db';
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,     
    private authDb: AuthDbService,
    private store: Store<AuthState>) {}

  @Effect()
  login$ = this.actions.ofType(AuthActionTypes.LOGIN).pipe(
    map((action: Login) => action.payload),
    switchMap(credentials => {
      return this.authDb
        .login(credentials.email, credentials.password)
        .then(() => {
          return { type: AuthActionTypes.LOGIN_SUCCESS, payload: {} };
        })
        .catch(err => {
          return { type: AuthActionTypes.LOGIN_FAILED, payload: err.message };
        });
    })
  );

  @Effect()
  logout$ = this.actions.ofType(AuthActionTypes.LOGOUT).pipe(
    switchMap(() => {
      return this.authDb
        .logout()
        .then(() => {
          return { type: AuthActionTypes.LOGOUT_SUCCESS, payload: {} };
        })
        .catch(err => {
          return { type: AuthActionTypes.LOGOUT_FAILED, payload: err.message };
        });
    })
  );

  @Effect()
  authChanged$ = this.authDb.getAuthState().pipe(
    switchMap(authState => {
      if(authState) {
        return Observable.of({
          type: AuthActionTypes.SET_AUTHENTICATED,
          payload: null
        })
      } else {
        return Observable.of( {
          type: AuthActionTypes.SET_NOT_AUTHENTICATED,
          payload: null
        })
      }
    })
  )

}
