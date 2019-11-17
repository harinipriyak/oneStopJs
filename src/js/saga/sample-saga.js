import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_STATION_NAME } from '../actions/types';
import { updateStationName } from '../actions';
import { getStationNameApi } from '../api/sample-api';

export const getStationNameSaga = function* (action) {
  try {
    const response = yield call(getStationNameApi, action.keyword);
    yield put(updateStationName(response.stations[0].name));
  } catch (error) {
    yield put(updateStationName(null));
  }
};

export default function* sampleSaga() {
  yield takeEvery(GET_STATION_NAME, getStationNameSaga);
}
