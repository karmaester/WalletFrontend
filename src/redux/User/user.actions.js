import { SET_USER, SET_USER_BITCOIN_BALANCE } from './user.types';


export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

export const setUserBitcoinBalance = (payload) => {
    return {
        type: SET_USER_BITCOIN_BALANCE,
        payload,
    };
};