import { combineReducers } from 'redux';
import login from './login';
import {selectedNavitem,postsByNavitem} from './front';

const AppReducer = combineReducers({login,selectedNavitem,postsByNavitem})


export default AppReducer;