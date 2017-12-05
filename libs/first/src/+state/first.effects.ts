import {Injectable} from '@angular/core';
import {Effect, Actions, EffectNotification} from '@ngrx/effects';

import {FirstState} from './first.interfaces';
import { FirstActionTypes } from './first.actions';
import { DataDbService } from '@ngrx-firestore-examples/db';
import { mergeMap, map, exhaustMap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AuthActionTypes } from '@ngrx-firestore-examples/auth/src/+state/auth.actions';

@Injectable()
export class FirstEffects {

  @Effect()
  getData$ = this.dataDb.getFakeDataStateChanges().pipe(
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[FirstData] ${action.type}`,
        payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
      };
    })
  );
/*
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
    return this.actions.ofType(AuthActionTypes.SET_AUTHENTICATED).pipe(
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions.ofType(AuthActionTypes.SET_NOT_AUTHENTICATED)))))
  }
*/
  constructor(private actions: Actions, private dataDb: DataDbService) {}
}
