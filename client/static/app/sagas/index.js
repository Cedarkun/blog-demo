/*
export default function * helloSaga() {
    console.log('Hello Sagas!');
}
*/

import {take,put,call} from 'redux-saga/effects'
import {get, post} from '../fetch/index'
import FETCH_START from '../actions/fetch'
import FETCH_END from '../actions/fetch'
import SET_MESSAGE from '../actions/fetch'

export function* getPosts (startId,count) {
  yield put({type: FETCH_START});
  try {
      return yield call(get, `/index?start=${startId}&count=${count}`);
  } catch (err) {
      yield put({type: SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
  } finally {
      yield put({type: FETCH_END})
  }
}
