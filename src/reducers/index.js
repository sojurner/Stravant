import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { clubReducer } from './clubReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  clubs: clubReducer
});

export default rootReducer;
