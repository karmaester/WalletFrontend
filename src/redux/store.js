import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import {
    persistReducer,
    persistStore
} from 'redux-persist';

const persistConfig = {
    key: 'user',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware());

const Persistor = persistStore(store);

export { Persistor };
export default store;