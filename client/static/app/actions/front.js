export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_NAVITEM = 'SELECT_NAVITEM'
export const INVALIDATE_NAVITEM = 'INVALIDATE_NAVITEM'

export function requestPosts(navitem,startId,count) {
  return {
    type: REQUEST_POSTS,
    navitem,
    startId,
    count
  };
};

export function receivePosts(navitem, json) {
  return {
    type: RECEIVE_POSTS,
    navitem,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

export function selectNavitem(navitem) {
  return {
    type: SELECT_NAVITEM,
    navitem
  };
};

export function invalidateNavitem(navitem) {
  return {
    type: INVALIDATE_NAVITEM,
    navitem
  };
};

/*
export const actionsTypes = {
    GET_LIST:"GET_LIST",
    RESPONSE_LIST: "RESPONSE_LIST",
    GET_DETAIL:"GET_DETAIL",
    RESPONSE_DETAIL: "RESPONSE_DETAIL"
  };

export const get_list = (count) => {
    count+=2;
    return {
      type: actionsTypes.GET_LIST,
      count
    }
  }
*/