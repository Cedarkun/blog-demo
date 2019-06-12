/*
export default function * helloSaga() {
    console.log('Hello Sagas!');
}
*/

import {fork} from 'redux-saga/effects'
import {getPostsFlow,getTagsFlow} from './frontSaga'
import {loginFlow} from './userInfoSaga'

export default function* rootSaga() {
    yield fork(getPostsFlow);
    yield fork(getTagsFlow);
    yield fork(loginFlow);
}
