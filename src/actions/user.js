import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { URL_API } from '../constants/Api';
import { LOGIN_ERROR, LOGIN_LOADING, GET_LOGIN } from '../reducers/User';

const api = (data = {}) => {
    return axios.create({
        baseURL: URL_API,
        data
    })
}

export const login = (data, cb) => dispatch => {
    dispatch({type: LOGIN_LOADING})
    api().post('/login', data).then(async res => {
        await AsyncStorage.setItem('@TOKEN', res.data.token)
        dispatch({type: GET_LOGIN, payload: res.data.token})
        cb('Home')
    }).catch(err => {
        let message = err.response.data.message
        if(err.response.data.message.includes('email') || err.response.data.message.includes('password') )
            message = "Email ou Senha inválido"

        dispatch({
            type: LOGIN_ERROR,
            payload: message 
        })
    })
}