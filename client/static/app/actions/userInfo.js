export const actionTypes={
    REQUEST_LOGIN: 'REQUEST_LOGIN',
    RESPONSE_LOGIN: 'RESPONSE_LOGIN'
  };
  
export const actions={
    requestLogin: function(userName,passWord){
      return{
        type: actionTypes.REQUEST_LOGIN,
        userName,
        passWord
      }
    }
  };