export const actionTypes={
  FETCH_START:'FETCH_START',
  FETCH_END: 'FETCH_END',
  SET_MESSAGE: 'SET_MESSAGE'
};

export const actions={
  fetchStart: function(){
    return {
      type: FETCH_START,
      isFetching: true
    };
  },
  /*
  fetchEnd: function(){
    return {
      type: FETCH_END,
      isFetching: false
    };
  },

  setMessage: function(msgType,msgContent){
    return {
      type: SET_MESSAGE,
      isFetching: false,
      msgType,
      msgContent
    };
  },
  */
};
