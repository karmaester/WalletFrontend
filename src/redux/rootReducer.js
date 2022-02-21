import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import priceReducer from './Price/price.reducer';


const rootReducer = combineReducers({

    user: userReducer,
    price: priceReducer,

});

export default rootReducer;