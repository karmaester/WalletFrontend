import { SET_USER, SET_USER_BITCOIN_BALANCE } from './user.types';


const INITIAL_STATE = {

    user: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;


    switch (type) {

        case SET_USER:
            return {
                ...state, user: payload,
            };

        case SET_USER_BITCOIN_BALANCE:
            return {
                ...state, user: { ...state.user, bitcoinBalance: payload },
            };

        default: return state;
    }
};

export default reducer;