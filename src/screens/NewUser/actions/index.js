import {
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    RESET,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE
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

export const editUser = (id, data) => {
    return {
        type: EDIT_USER,
        payload: data

    };
};

export const editUserSuccess = (data) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: {
            data,
        },
    };
};

export const editUserFailure = (data) => {
    return { type: EDIT_USER_FAILURE };
};

export const editNewUser = (id, values) => {
    return (dispatch) => {
        dispatch(editUser(id, values));
        updateUser(id, values)
            .then((response) => {
                dispatch(editUserSuccess(response));
                if (!response) {
                    dispatch(editUserFailure());
                }
            })
            .catch((error) => {
                dispatch(editUserFailure(error))
            });
    };
};


