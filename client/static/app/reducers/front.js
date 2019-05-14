/*const initialState = {
    list: {},
    detail:{},
    count:0
};*/
import
{
    SELECT_NAVITEM,
    INVALIDATE_NAVITEM,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/front'


export function selectedNavitem(state = 'home', action) 
{
    switch (action.type)
    {
      case SELECT_NAVITEM:
        return action.navitem;
      default:
        return state;
    }
}
  
function posts(state = {isFetching:false, didInvalidate:false, items:[]},action)
{
    switch (action.type)
    {
      case INVALIDATE_NAVITEM:
        return Object.assign({}, state, {didInvalidate: true});
      case REQUEST_POSTS:
        return Object.assign({}, state, {isFetching: true,didInvalidate: false});
      case RECEIVE_POSTS:
        return Object.assign({}, state, {isFetching:false, didInvalidate:false, items:action.posts, lastUpdated:action.receivedAt});
      default:
        return state;
    }
}
  
export function postsByNavitem(state = {}, action) 
{
    switch (action.type) 
    {
      case INVALIDATE_NAVITEM:
      case RECEIVE_POSTS:
      case REQUEST_POSTS:
        return Object.assign({}, state, {[action.navitem]: posts(state[action.navitem], action)});//解构
      default:
        return state;
    }
}