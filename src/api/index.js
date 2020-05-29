const URL = 'https://zestian-map-finder.herokuapp.com'
const GET_USER = '/user/id/'

export const fetchUser = (id) => {
    return fetch(`${URL}${GET_USER}${id}`)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}