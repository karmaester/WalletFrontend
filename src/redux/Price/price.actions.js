import { SET_PRICE } from './price.types';


export const setPrice = (payload) => {

    return {

        type: SET_PRICE,
        payload,

    };

};