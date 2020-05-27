
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';
import {fetchSchedule, fetchPeople} from '../api'

export const selected_tab = (tabId2) => {
    return {type: 'selected_tab', payload: tabId2}
}

export const getData = () => {
    return {type: LOGIN}
}

export const getDataSuccess = (data) => {
    return {type: LOGIN_SUCCESS, data}
}

export const getDateFailure = (data) => {
    return {type: LOGIN_FAILURE}
}

export const fetchData = () => {
    return (dispatch) => {
        
        dispatch(getData())

        fetchSchedule()
        .then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}
