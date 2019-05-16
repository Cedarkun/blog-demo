import { combineReducers } from 'redux';
import login from './login';
import front from './frontReducer';

const AppReducer = combineReducers({login,front})


export default AppReducer;