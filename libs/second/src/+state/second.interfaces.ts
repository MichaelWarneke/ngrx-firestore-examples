import { FakeData } from "@ngrx-firestore-examples/db";

export interface Second {
  // define state here
  list: FakeData[];
}

export interface SecondState {
  readonly second: Second;
}
