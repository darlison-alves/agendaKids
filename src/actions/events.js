import axios from 'axios';
import qs from 'qs'
import { AsyncStorage } from 'react-native'

import { GET_EVENTS, GET_EVENTS_LOADING } from '../reducers/Events';
import { NameOfMonth, uuidv4 } from '../constants/Helpers';
import { URL_API } from '../constants/Api';

const apiBase = async (method = 'GET', headers, data = {}) => {
    return axios.create(
        {
            baseURL: URL_API,
            method,
            data,
            headers: { ...headers, token: await AsyncStorage.getItem('@TOKEN')}
        }
    )
}

export const getListEvent = (page = 1, limit=10) => async (dispatch, getState) => {
    const { events } = getState()

    if(page > events.metadata.total_pages) {
        dispatch({ type: GET_EVENTS, payload: { data: [], metadata: events.metadata } })
        return;
    }
    console.log('page', page)
    dispatch({type: GET_EVENTS_LOADING})
    const api = await apiBase();
    api.get(`/events?limit=${limit}&page=${page}`).then(result => {        
        dispatch(montandoLista(result.data))
    }).catch(err => {
        console.log('dededed', err)
        dispatch({ type: GET_EVENTS, payload: [] })
    })
}


const montandoLista = (data) => dispatch => {
    let novalista = []
    let listaTemp = []    
    let lista = data.data
    
    NameOfMonth.forEach(value => {
        lista.forEach((item, index) => {
            const data = new Date(item.startAt)
            const month = NameOfMonth[data.getMonth()]
            const dia = data.getDate()
            if( value === month ) {

                const tem = listaTemp.filter(l => l.dia === dia)

                if(!tem.length) {
                    listaTemp.push({
                        "id": uuidv4(),
                        "title": value,
                        "dia": dia,
                        "startAt": item.startAt,
                        "header": true,
                    })
                }

                listaTemp.push(item)
            }
        })

        if(listaTemp.length > 1) {
            novalista = novalista.concat(listaTemp)            
        }

        listaTemp = []

    })  

    dispatch({ type: GET_EVENTS, payload: { data: novalista, metadata: data.metadata } })
}