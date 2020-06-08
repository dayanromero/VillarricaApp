import {
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    RESET,
} from '../constants';

import { createUser, updateUser } from '../../../config/api';

export const saveUser = (data) => {
    return {
        type: CREATE_USER,
        payload: {
            data
        }
    };
};

export const saveUserSuccess = (data) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: {
            data,
        },
    };
};

export const saveUserFailure = (data) => {
    return { type: CREATE_USER_FAILURE };
};

export const resetValues = () => {
    return { type: RESET};
};

export const saveNewUser = (data) => {
    return (dispatch) => {
        dispatch(saveUser(data));
        createUser(data)
            .then((response) => {
                dispatch(saveUserSuccess(response));
                if (!response) {
                    dispatch(saveUserFailure());
                }
            })
            .catch((error) => {
                dispatch(saveUserFailure(error))
            });
    };
};