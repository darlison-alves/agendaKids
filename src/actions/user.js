import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { URL_API } from '../constants/Api';
import { LOGIN_ERROR } from '../reducers/User';

const api = (data = {}) => {
    return axios.create({
        baseURL: URL_API,
        data
    })
}

export const login = (data, cb) => dispatch => {
    console.log('data', data)
    api().post('/login', data).then(async res => {
        await AsyncStorage.setItem('@TOKEN', res.data.token)
        cb('Home')
    }).catch(err => {
        console.log(err.response.data.message)
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data.message
        })
    })
}