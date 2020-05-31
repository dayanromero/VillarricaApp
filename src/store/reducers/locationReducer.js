import { LOCATION, LOCATION_SUCCESS, LOCATION_FAILURE } from '../constants/index';

const initialState = {
    data: null,
    loading: false,
    error: false,
};

export default locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION:
            return {
                ...state,
                data: null,
                loading: true,
            };
        case LOCATION_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
            };
        case LOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
