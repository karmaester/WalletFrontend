import { SET_PRICE } from './price.types';


const INITIAL_STATE = {

    price: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;


    switch (type) {

        case SET_PRICE:

            return {

                ...state, price: payload,

            };

        default: return state;

    }

};

export default reducer;