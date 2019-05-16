/*
export default function * helloSaga() {
    console.log('Hello Sagas!');
}
*/

import {fork} from 'redux-saga/effects'
import {getPostsFlow} from './frontSaga'

export default function* rootSaga() {
    yield fork(getPostsFlow);
}
