import { createStore, applyMiddleware } from 'redux'; 
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); 

if (process.env.NODE_ENV === 'developement') {
    middlewares.push(logger); 
}

export const persistor = persistStore(store); 

export default { store, persistor }; 
