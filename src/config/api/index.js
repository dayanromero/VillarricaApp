import axios from 'axios';

const URL = 'https://zestian-map-finder.herokuapp.com'
const GET_USER = '/user/id/'
const GET_LOCATIONS = '/location/all'
const GET_ACTIVITY = '/event/find?userId='
const CREATE_ACTIVITY = '/event/create/'
const CREATE_USER = '/user/create/'
const EDIT_USER = '/user/update/'

const instance = axios.create({
    baseURL: URL,
  });

export const fetchUser = (id) => {
    return instance.get(`${GET_USER}${id}`)
    .then(Response =>  Response.data)
}

export const fetchActivity = (userid) => {
    return instance.get(`${GET_ACTIVITY}${userid}`)
    .then(Response =>  Response.data)
}

export const fetchLocation = () => {
    return instance.get(`${GET_LOCATIONS}`)
    .then(Response =>  Response.data)
}

export const createActivity = (data) => {
    return instance.post(`${CREATE_ACTIVITY}`, data)
    .then(Response =>  Response.data)
}

export const createUser = (data) => {
    return instance.post(`${CREATE_USER}`, data)
    .then(Response =>  Response.data)
}

export const updateUser = (data) => {
    return instance.post(`${EDIT_USER}`, data)
    .then(Response =>  Response.data)
}