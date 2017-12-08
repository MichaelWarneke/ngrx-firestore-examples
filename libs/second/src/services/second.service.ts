import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { selectSecondAll } from '../+state/second.reducer';
import { DataDbService } from '@ngrx-firestore-examples/db';

@Injectable()
export class SecondService implements OnDestroy {
  dataSub: Subscription;
  
  constructor(private store: Store<any>, private db: DataDbService) {
    this.dataSub = this.db.getFakeDataStateChanges().subscribe(actions => {
      actions.forEach(action =>
        this.store.dispatch({
          type: `[SecondData] ${action.type}`,
          payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
        })
      )
    })
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  getData() {
    return this.store.select(selectSecondAll);
  }
}
