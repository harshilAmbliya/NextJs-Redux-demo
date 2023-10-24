// rootReducer.js
import { combineReducers } from 'redux';
import userReducers from './userReducer';
import { isLoadingReducer } from './isLoadingReducre';


const rootReducer = combineReducers({
  user: userReducers,
  loading:isLoadingReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
