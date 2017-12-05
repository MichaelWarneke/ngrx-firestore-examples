import { FakeData } from "@ngrx-firestore-examples/db";

export interface First {
  // define state here
  list: FakeData[];
}

export interface FirstState {
  readonly first: First;
}
