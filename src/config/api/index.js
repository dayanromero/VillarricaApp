const URL = 'https://zestian-map-finder.herokuapp.com'
const GET_USER = '/user/id/'
const GET_LOCATIONS = '/location/all'

export const fetchUser = (id) => {
    return fetch(`${URL}${GET_USER}${id}`)
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