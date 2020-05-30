import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

import { fetchUser } from '../../../config/api';

export const getData = (id) => {
    return {
        type: LOGIN,
        payload: {
            id,
        },
    };
};

export const getDataSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            data,
        },
    };
};

export const getDateFailure = (data) => {
    return { type: LOGIN_FAILURE };
};

export const fetchData = (id) => {
    return (dispatch) => {
        fetchUser(id)
            .then(([response, json]) => {
                dispatch(getDataSuccess(json));
            })
            .catch((error) => console.log(error));
    };
};
