import {
    FETCH_ZONE,
    FETCH_ZONE_SUCCESS,
    FETCH_ZONE_FAILURE,
    RESET_FETCH_ZONE,
} from '../constants';

import { getZones} from '../../../config/api';

export const fecthZone = (data) => {
    return {
        type: FETCH_ZONE,
        payload: {
            data
        }
    };
};

export const fecthZoneSuccess = (data) => {
    return {
        type: FETCH_ZONE_SUCCESS,
        payload: {
            data,
        },
    };
};

export const fecthZoneFailure = (data) => {
    return { type: FETCH_ZONE_FAILURE };
};

export const reseFecthZoneValues = () => {
    return { type: RESET_FETCH_ZONE};
};

export const fetchZones = (data) => {
    return (dispatch) => {
        dispatch(fecthZone(data));
        getZones(data)
            .then((response) => {
                dispatch(fecthZoneSuccess(response));
                if (!response) {
                    dispatch(fecthZoneFailure());
                }
            })
            .catch((error) => {
                dispatch(fecthZoneFailure(error))
            });
    };
};