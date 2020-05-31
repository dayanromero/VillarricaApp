import { LOCATION, LOCATION_SUCCESS, LOCATION_FAILURE } from '../constants/index';

import { fetchLocation } from '../../config/api/index';

export const getLocation = () => {
    return {
        type: LOCATION,
        payload: {
            id,
        },
    };
};

export const getLocationSuccess = (data) => {
    return {
        type: LOCATION_SUCCESS,
        payload: {
            data,
        },
    };
};

export const getLocationFailure = (data) => {
    return { type: LOCATION_FAILURE };
};

export const fetchDataLocations = () => {
    return (dispatch) => {
        fetchLocation()
            .then(([response, json]) => {
                dispatch(getLocationSuccess(json));
            })
            .catch((error) => dispatch(getLocationFailure(error)));
    };
};
