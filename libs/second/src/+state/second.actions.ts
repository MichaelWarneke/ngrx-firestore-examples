import { FakeData } from "@ngrx-firestore-examples/db";

export enum SecondActionTypes {
  SECOND_DATA_ADDED = '[SecondData] added',
  SECOND_DATA_MODIFIED = '[SecondData] modified',
  SECOND_DATA_REMOVED = '[SecondData] removed'
}

export interface FakeDataAdded {
  type: SecondActionTypes.SECOND_DATA_ADDED;
  payload: FakeData;
}

export interface FakeDataModified {
  type: SecondActionTypes.SECOND_DATA_MODIFIED;
  payload: FakeData;
}

export interface FakeDataRemoved {
  type: SecondActionTypes.SECOND_DATA_REMOVED;
  payload: FakeData;
}

export type SecondAction =
  | FakeDataAdded
  | FakeDataModified
  | FakeDataRemoved;
