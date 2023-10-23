// rootReducer.js
import { combineReducers } from 'redux';
import userReducers from './userReducer';


const rootReducer = combineReducers({
  users: userReducers,
  // Add more reducers here if you have them
});

export default rootReducer;
