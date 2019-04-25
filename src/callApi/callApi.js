import axios from 'axios';
import {API_URL} from '../constants/config';

const callApi = (method, endpoint, data)=>{
    return axios({
        method,
        data,
        url: `${API_URL}/${endpoint}`
    })
};
export default callApi;