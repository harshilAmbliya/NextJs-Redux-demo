// store.js
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducres';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
