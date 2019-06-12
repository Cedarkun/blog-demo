import { combineReducers } from 'redux';
import fetch from './fetchReducer';
import front from './frontReducer';
import userInfo from './userInfoReducer';

const AppReducer = combineReducers({fetch,front,userInfo})

export default AppReducer;