import { FakeData } from "@ngrx-firestore-examples/db";

export enum FirstActionTypes {
  FAKE_DATA_ADDED = '[FirstData] added',
  FAKE_DATA_MODIFIED = '[FirstData] modified',
  FAKE_DATA_REMOVED = '[FirstData] removed'
}

export interface FakeDataAdded {
  type: FirstActionTypes.FAKE_DATA_ADDED;
  payload: FakeData;
}

export interface FakeDataModified {
  type: FirstActionTypes.FAKE_DATA_MODIFIED;
  payload: FakeData;
}

export interface FakeDataRemoved {
  type: FirstActionTypes.FAKE_DATA_REMOVED;
  payload: FakeData;
}

export type FirstAction =
  | FakeDataAdded
  | FakeDataModified
  | FakeDataRemoved;
