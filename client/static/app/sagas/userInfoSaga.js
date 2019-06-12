import {take,put,call} from 'redux-saga/effects';
import {get, post} from '../fetch/index';
import {actionTypes as FetchActionTypes} from '../actions/fetch';
import {actionTypes as UserInfoActionTypes} from '../actions/userInfo';

export function* login(userName, passWord) {
    yield put({type: FetchActionTypes.FETCH_START});
    try {
        return yield call(post, '/user/login', {userName, passWord})
    } catch (error) {
        yield put({type:FetchActionTypes.SET_MESSAGE,msgContent:'error',msgType:0});
    } finally {
        yield put({type: FetchActionTypes.FETCH_END});
    }
}

export function* loginFlow() {
    console.log('wait requestlogin')
    while (true) {
        let request = yield take(UserInfoActionTypes.REQUEST_LOGIN);
        let res = yield call(login, request.userName, request.passWord);
        if(res && res.data.code===0){
            yield put({type:FetchActionTypes.SET_MESSAGE,msgContent:'success',msgType:1});
            yield put({type:UserInfoActionTypes.RESPONSE_LOGIN,userInfo:res.data.receiveData})
        }
    }
}