import { SET_USER } from './user.types';


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

        default: return state;
    }
};

export default reducer;