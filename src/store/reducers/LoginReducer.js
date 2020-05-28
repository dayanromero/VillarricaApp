import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

const initialState = {
    data: [],
    isFeching: false,
    error: false,
};

export default LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                data: [],
                isFeching: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isFeching: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true,
            };
        default:
            return state;
    }
};
