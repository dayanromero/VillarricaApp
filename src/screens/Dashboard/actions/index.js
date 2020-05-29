import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constants';

import { fetchUser } from '../../../api';

export const searchData = () => {
    return {
        type: SEARCH,
    };
};

export const searchDataSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        payload: {
            data,
        },
    };
};

export const searchDataFailure = (data) => {
    return { type: SEARCH_FAILURE };
};

export const fetchData = (id) => {
    return (dispatch) => {
        dispatch(searchData());
        fetchUser(id)
            .then(([response, json]) => {
                dispatch(searchDataSuccess(json));
            })
            .catch((error) => dispatch(searchDataFailure(error)));
    };
};
