import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';
import { incCount, incCountDeleyed } from './counterSlice';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

type PayloadActionFromCreator<AC> = AC extends ActionCreatorWithPayload<infer P> ? PayloadAction<P> : unknown;

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function* onIncCountDeleyed(action: PayloadActionFromCreator<typeof incCountDeleyed>) {
  yield call(wait, 1000);
  yield put(incCount(action.payload));
}

export function* counterSaga() {
  yield takeLatest(incCountDeleyed.type, onIncCountDeleyed);
}
