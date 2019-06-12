export const actionTypes={
  REQUEST_TAGS:'REQUEST_TAGS',
  RECEIVE_TAGS:'RECEIVE_TAGS',
  REQUEST_POSTS:'REQUEST_POSTS',
  RECEIVE_POSTS: 'RECEIVE_POSTS',
  REQUEST_POST_DETAIL:'REQUEST_POST_DETAIL',
  RECEIVE_POST_DETAIL: 'RECEIVE_POST_DETAIL',
  REQUEST_INTRO:'REQUEST_INTRO',
  RECEIVE_INTRO:'RECEIVE_INTRO',
  //INVALIDATE_NAVITEM: 'INVALIDATE_NAVITEM'
};

export const actions={
  requestTags: function(tags) {
    return{
      type: actionTypes.REQUEST_TAGS,
      tags
    };
  },
  requestPosts: function(navitem, curTag, startId, clear=false,postsCount=5) {
    return {
      type: actionTypes.REQUEST_POSTS,
      navitem,
      curTag,
      startId,
      clear,
      postsCount      
    };
  },
  requestPostDetail: function(id){
    return {
      type: actionTypes.REQUEST_POST_DETAIL,
      id
    }
  },
  requestIntro(){
    return{
      type: actionTypes.REQUEST_INTRO
    }
  }

};


  /*
  invalidateNavitem: function(navitem) {
    return {
      type: INVALIDATE_NAVITEM,
      navitem
    };
  }
  */





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