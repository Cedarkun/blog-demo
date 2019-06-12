import {actionTypes} from '../actions/fetch';

const initialState = {
    isFetching: true,
    msg: {
        type: 1,//0失败 1成功
        content: ''
    },
    userInfo: {}
};

const fetchReducer=function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                ...state, isFetching: true
            };
        case actionTypes.FETCH_END:
            return {
                ...state, isFetching: false
            };
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                isFetching: false,
                msg: {
                    type: action.msgType,
                    content: action.msgContent
                }
            };
        case actionTypes.RESPONSE_USER_INFO:
            return {
                ...state, userInfo: action.data
            };
        default:
            return state
    }
}

export default fetchReducer;