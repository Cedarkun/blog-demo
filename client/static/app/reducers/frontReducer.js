import actionTypes from '../actions/front';

const initialState = {
  navitem:'',
  posts: [],
  postDetail:{},
  total:0
};

export function frontReducer(state = initialState, action) {
  switch (action.type) {
      case actionTypes.RECEIVE_POSTS:
          return {
              ...state, posts: [...action.data.list], total: action.data.total
          };
      case actionTypes.RECEIVE_POST_DETAIL:
          return {
              ...state, navitem:action.navitem,  postDetail: action.data
          };

      default:
          return state;
  }
}
