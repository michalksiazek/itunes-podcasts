import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';
import { incCount, incCountDeleyed } from './counterSlice';
import { put, takeEvery } from 'redux-saga/effects';

type PayloadActionFromCreator<AC> = AC extends ActionCreatorWithPayload<infer P> ? PayloadAction<P> : unknown;

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function* onIncCountDeleyed(action: PayloadActionFromCreator<typeof incCountDeleyed>) {
  yield wait(1000);
  yield put(incCount(action.payload));
}

export function* counterSaga() {
  yield takeEvery(incCountDeleyed.type, onIncCountDeleyed);
}
