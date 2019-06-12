import {actionTypes} from '../actions/front';

const initialState = {
  navitem:'home',
  tags:[],
  curTag:'全部',
  posts: [],
  postDetail:{},
  total:0
};

const frontReducer=function (state = initialState, action) {
  switch (action.type) {
        case actionTypes.RECEIVE_TAGS:
            return{
                ...state,
                tags:action.tags
            }
        case actionTypes.RECEIVE_POSTS:
            return {
                ...state, 
                navitem:action.navitem,  
                curTag:action.curTag,
                posts: action.clear?action.posts:state.posts.concat(action.posts), 
                total: action.total//action.data.total
            };
        case actionTypes.RECEIVE_POST_DETAIL:
            return {
                ...state, 
                navitem:action.navitem,  
                postDetail: action.data
            };
        default:
            return state;
  }
}
export default frontReducer;