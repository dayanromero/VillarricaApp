import {
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
} from '../constants';

const initialState = {
    data: null,
    loading: false,
    error: false,
};

export default createUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                data: null,
                loading: true,
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
