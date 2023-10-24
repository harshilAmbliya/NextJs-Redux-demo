// store.js
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducres';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//   key: 'root',
//   storage, // Use localStorage for data persistence
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

export { store };
