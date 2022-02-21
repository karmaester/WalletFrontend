import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import priceReducer from './Price/price.reducer';

const persistConfig = {
    key: 'user',
    storage,
};

const reducers = combineReducers({
    user: userReducer,
    price: priceReducer,
});

const store = createStore(reducers);

const persistedReducer = persistReducer(persistConfig, reducers);

export const configureStore = ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export default store;