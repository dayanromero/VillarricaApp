import {
    CREATE_ACTIVITY,
    CREATE_ACTIVITY_SUCCESS,
    CREATE_ACTIVITY_FAILURE,
} from '../constants';
import { RESET } from '../../../screens/NewUser/constants';

import { createActivity } from '../../../config/api';

export const saveActivity = (data) => {
    return {
        type: CREATE_ACTIVITY,
        payload: {
            data
        }
    };
};

export const saveActivitySuccess = (data) => {
    return {
        type: CREATE_ACTIVITY_SUCCESS,
        payload: {
            data,
        },
    };
};

export const saveActivityFailure = (data) => {
    return { type: CREATE_ACTIVITY_FAILURE };
};

export const resetValues = () => {
    return { type: RESET};
};

export const fetchActivity = (data) => {
    return (dispatch) => {
        dispatch(saveActivity(data));
        createActivity(data)
            .then((response) => {
                
                dispatch(saveActivitySuccess(response));
                if (!response) {
                    dispatch(saveActivityFailure());
                }
            })
            .catch((error) => {
                dispatch(saveActivityFailure(error))
            });
    };
};
