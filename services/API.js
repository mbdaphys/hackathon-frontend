import axios from 'axios'

export default axios.create({
    baseURL : 'http://5.23.55.230:8080',
    withCredentials : true,
    responseType : 'json',
    headers :{
        accept : 'application/json'
    }
})