import { getToken } from './auth-service'
const URL = 'http://localhost:3000/';


export const doRequest = async (resource, method, data = '', urlParam = '') => {
    console.log('enviando dados....')
    const params = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + getToken()
        },
    }
    if(!['GET', 'DELETE'].includes(method)) {
        params.body = JSON.stringify(data)
    }
    return await fetch( URL + resource + urlParam, params)
    
}

export const doPublicRequest = async (resource, method, data = '', urlParam = '') => {
    console.log('enviando dados....')
    const params = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    if(!['GET', 'DELETE'].includes(method)) {
        params.body = JSON.stringify(data)
    }
    return await fetch( URL + resource + urlParam, params)
    
}