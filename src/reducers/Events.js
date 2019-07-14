export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING'

const initial_state = {
    data:[],
    metadata: [],
    loading: false
}
export default (state=initial_state, action) => {
    switch(action.type) {
        case GET_EVENTS_LOADING: 
            return{
                ...state,
                loading: true
            }
        case GET_EVENTS:
            return {
                ...state,
                data: action.payload.data,
                metadata: action.payload.metadata,
                loading: false
            }
        default: 
            return state
    }
}