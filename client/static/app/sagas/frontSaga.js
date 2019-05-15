import {take,put,call} from 'redux-saga/effects'
import {get, post} from '../fetch/index'
import {actionsTypes as FetchActionTypes} from '../actions/fetch'
import {actionTypes as FrontActionTypes} from '../actions/front'


export function* getPosts (navitem,startId,postsCount) {
    yield put({type: FetchActionTypes.FETCH_START});
    try {
        return yield call(get, `/getArticles?navitem=${navitem}&startId=${startId}&postsCount=${postsCount}`);
    } catch (err) {
        yield put({type: FetchActionTypes.SET_MESSAGE, isFetching: false, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: FetchActionTypes.FETCH_END, isFetching: false})
    }
}

export function* getPostsFlow () {
    while (true){
        let req = yield take(FrontActionTypes.REQUEST_POSTS);//等待dispatch REQUEST_POSTS action
        console.log(req);
        let res = yield call(getPosts, req.navitem,req.startId, req.postsCount);//阻塞
        if(res){
            if(res.code === 0){
                //res.data.pageNum = req.pageNum;
                yield put({type: FrontActionTypes.RESPONSE_POSTS, data:res.data});
            }else{
                yield put({type: FetchActionTypes.SET_MESSAGE, isFetching: false, msgContent: res.message, msgType: 0});
            }
        }
    }
}