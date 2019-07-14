import axios from 'axios';
import qs from 'qs'

import { GET_EVENTS } from '../reducers/Events';
import { NameOfMonth } from '../constants/Helpers';

const apiBase = (method = 'GET', headers, data = {}) => {
    return axios.create(
        {
            baseURL: 'https://frontend-test.agendaedu.com/api/events',
            method,
            data,
            headers: { ...headers, token: '3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI' }
        }
    )
}

export const getListEvent = () => dispatch => {
    apiBase({ limit: 10, page: 1 }).get(`?limit=10&page=1`).then(result => {
        //dispatch({ type: GET_EVENTS, payload: result.data })
        dispatch(montandoLista(result.data.data))
    }).catch(err => {
        console.log('dededed', err)
        dispatch({ type: GET_EVENTS, payload: [] })
    })
}


const montandoLista = (lista = []) => dispatch => {
    let novalista = []
    let listaTemp = []
    
    NameOfMonth.forEach(value => {
               

        lista.forEach(item => {
            const data = new Date(item.startAt)
            const month = NameOfMonth[data.getMonth()]
            const dia = data.getDate()
            if( value === month ) {

                const tem = listaTemp.filter(l => l.dia === dia)

                if(!tem.length) {
                    listaTemp.push({
                        "id": `${dia}-${value}`,
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

    dispatch({ type: GET_EVENTS, payload: { data: novalista } })
}