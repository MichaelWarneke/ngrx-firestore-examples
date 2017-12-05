import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { take, map } from 'rxjs/operators';

export interface FakeData {
  id?: string | null;
  name: string;
  random_number: number;
}

@Injectable()
export class DataDbService {

  constructor(private afs: AngularFirestore) { 
    console.log("Constructor !!!!!!!!!!!!!!!!");

    // Comment out. Only use one time to enter data into database
    // this.setFakeData();
  }

  // Sets the fake data in the database
  // Only works when firestore rules set to allow write access
  // Start this function only once to avoid inserting the same data again
  private setFakeData() {
    let i: number;
    for(i = 0; i < 50; i++) {
      this.afs.collection<FakeData>('fake-data').add({name: "NGRX-" + i, random_number: Math.random() });
    }
  }

  getFakeDataStateChanges() {
    return this.afs.collection<FakeData>('fake-data').stateChanges();
  }

}
