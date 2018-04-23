import {combineReducers} from 'redux';
import userInfo from './user';

const rootReducer = combineReducers(
  {userInfo: userInfo}
);

export default rootReducer;
