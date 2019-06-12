import {actionTypes} from '../actions/userInfo';

const initialState = {
    admin:false,
    userInfo:{
    }

};
const userInfoReducer=function (state = initialState, action) {
    switch (action.type) {       
        case actionTypes.RESPONSE_LOGIN:
              return {
                  ...state,
                  admin:true,
                  userInfo:action.userInfo
              };
          default:
              return state;
    }
  }
export default userInfoReducer;