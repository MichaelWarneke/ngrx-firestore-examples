import { FakeData } from "@ngrx-firestore-examples/db";

export enum FirstActionTypes {
  FIRST_DATA_ADDED = '[FirstData] added',
  FIRST_DATA_MODIFIED = '[FirstData] modified',
  FIRST_DATA_REMOVED = '[FirstData] removed'
}

export interface FakeDataAdded {
  type: FirstActionTypes.FIRST_DATA_ADDED;
  payload: FakeData;
}

export interface FakeDataModified {
  type: FirstActionTypes.FIRST_DATA_MODIFIED;
  payload: FakeData;
}

export interface FakeDataRemoved {
  type: FirstActionTypes.FIRST_DATA_REMOVED;
  payload: FakeData;
}

export type FirstAction =
  | FakeDataAdded
  | FakeDataModified
  | FakeDataRemoved;
