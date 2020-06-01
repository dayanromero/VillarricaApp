import { ACTIVITY, ACTIVITY_SUCCESS, ACTIVITY_FAILURE } from '../constants/index';

import { fetchActivity } from '../../../config/api/index';

export const getActivity = () => {
    return {
        type: ACTIVITY,
    };
};

export const getActivitySuccess = (data) => {
    return {
        type: ACTIVITY_SUCCESS,
        payload: {
            data,
        },
    };
};

export const getActivityFailure = (data) => {
    return { type: ACTIVITY_FAILURE };
};

export const fetchDataActivities = (id) => {
    return (dispatch) => {
        fetchActivity(id)
            .then(([response, json]) => {
                dispatch(getActivitySuccess(json));
                if(!json) {
                    dispatch(getActivityFailure());
                }
            })
            .catch((error) => dispatch(getActivityFailure(error)));
    };
};
