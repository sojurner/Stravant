import { combineReducers } from 'redux';
import { userReducer } from './userReducer/userReducer';
import { clubReducer } from './clubReducer/clubReducer';
import { pomReducer } from './pomReducer/pomReducer';
const rootReducer = combineReducers({
  currentUser: userReducer,
  clubs: clubReducer,
  pomInfo: pomReducer
});

export default rootReducer;
