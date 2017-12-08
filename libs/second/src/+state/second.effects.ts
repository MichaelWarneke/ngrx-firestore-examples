import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {DataPersistence} from '@nrwl/nx';
import {SecondState} from './second.interfaces';

@Injectable()
export class SecondEffects {


  constructor(private actions: Actions, private d: DataPersistence<SecondState>) {}
}
