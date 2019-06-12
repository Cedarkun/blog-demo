import {take,put,call} from 'redux-saga/effects';
import {get, post} from '../fetch/index';
import {actionTypes as FetchActionTypes} from '../actions/fetch';
import {actionTypes as FrontActionTypes} from '../actions/front';


export function* getPosts (navitem,curTag,startId,postsCount) {
    yield put({type: FetchActionTypes.FETCH_START});
    try {
        return yield call(get, `/getArticles?navitem=${navitem}&curTag=${curTag}&startId=${startId}&postsCount=${postsCount}`);
    } catch (err) {
        yield put({type: FetchActionTypes.SET_MESSAGE, msgContent: 'get posts error', msgType: 0});
    } finally {
        yield put({type: FetchActionTypes.FETCH_END})
        yield put({type: FetchActionTypes.SET_MESSAGE, msgContent: 'get posts continue', msgType: 1})
    }
}

export function* getPostsFlow ()
 {
    while (true){
        console.log('wait requestPosts');
        let req = yield take(FrontActionTypes.REQUEST_POSTS);//等待dispatch REQUEST_POSTS action
        let res = yield call(getPosts, req.navitem, req.curTag,req.startId, req.postsCount);//阻塞

        if(res){
            if(res.data.code === 0){
                let total =res.data.receiveData.length+ parseInt(req.startId);
                yield put({type: FrontActionTypes.RECEIVE_POSTS, 
                    navitem:req.navitem, 
                    curTag:req.curTag,
                    posts:res.data.receiveData, 
                    total:total,
                    clear:req.clear
                });//命令middleware向Store发起一个action
            }
            else{
                yield put({type: FetchActionTypes.SET_MESSAGE, 
                    isFetching: false, 
                    msgContent: res.data.message, 
                    msgType: 0
                });
            }
        }
    }
}

export function* getTags() {
    yield put({type: FetchActionTypes.FETCH_START});
    try {
        return yield call(get, '/getTags');
    } catch (err) {
        yield put({type: FetchActionTypes.SET_MESSAGE, isFetching: false, msgContent: 'error', msgType: 0});
    } finally {
        yield put({type: FetchActionTypes.FETCH_END, isFetching: false})
    }
}


export function* getTagsFlow()
{
    while (true){
        console.log('wait requestTags');
        yield take(FrontActionTypes.REQUEST_TAGS);//等待dispatch
        let res = yield call(getTags);       
        if(res){
            if(res.data.code === 0){
                yield put({type: FrontActionTypes.RECEIVE_TAGS, 
                    tags:res.data.receiveData, 
                });//命令middleware向Store发起一个action
            }
            else{
                yield put({type: FetchActionTypes.SET_MESSAGE,  
                    msgContent: res.data.message, 
                    msgType: 0
                });
            }
        }
        //let req = yield take(FrontActionTypes.REQUEST_TAGS);//等待dispatch
    }
}


