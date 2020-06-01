const URL = 'https://zestian-map-finder.herokuapp.com'
const GET_USER = '/user/id/'
const GET_LOCATIONS = '/location/all'
const GET_ACTIVITY = '/event/find?userId='

export const fetchUser = (id) => {
    return fetch(`${URL}${GET_USER}${id}`)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}

export const fetchActivity = (id) => {
    return fetch(`${URL}${GET_ACTIVITY}${id}`)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}

export const fetchLocation = () => {
    return fetch(`${URL}${GET_LOCATIONS}`)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}