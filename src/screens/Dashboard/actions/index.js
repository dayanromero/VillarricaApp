import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

import { fetchUser } from '../../../api';

export const searchData = (id) => {
    return {
        type: LOGIN,
        payload: {
            id,
        },
    };
};

export const searchDataSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            data,
        },
    };
};

export const searchDataFailure = (data) => {
    return { type: LOGIN_FAILURE };
};

export const fetchData = (id) => {
    return (dispatch) => {
        fetchUser(id)
            .then(([response, json]) => {
                console.log(json);
                dispatch(searchDataSuccess(json));
            })
            .catch((error) => searchDataFailure(error));
    };
};
