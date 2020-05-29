import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constants';

const initialState = {
    data: [],
    loading: false,
    error: false,
};

export default searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                data: [],
                loading: true,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
