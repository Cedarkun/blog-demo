/*
export default function * helloSaga() {
    console.log('Hello Sagas!');
}
*/

import {take,put,call} from 'redux-saga/effects'

export function* getArticleList (tag,pageNum) {
  yield put({type: IndexActionTypes.FETCH_START});
  try {
      return yield call(get, `/getArticles?pageNum=${pageNum}&isPublish=true&tag=${tag}`);
  } catch (err) {
      yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
  } finally {
      yield put({type: IndexActionTypes.FETCH_END})
  }
}
