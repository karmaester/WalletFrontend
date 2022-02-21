import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import priceReducer from './Price/price.reducer';

const reducers = combineReducers({
    user: userReducer,
    price: priceReducer,
});

export default reducers;
