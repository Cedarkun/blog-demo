import axios from 'axios'
//import Qs from 'qs'


export function get(url) {
    return axios.get(url);
}

export function post(url, data) {
    return axios.post(url, data);
}