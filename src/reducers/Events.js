export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING'

const initial_state = {
    data: [],
    metadata: {
        limit: 10,
        page: 1
    },
    loading: false
}
export default (state = initial_state, action) => {
    switch (action.type) {
        case GET_EVENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTS:
            let lista = state.data

            let metadata = {
                ...action.payload.metadata,
                page: parseInt(action.payload.metadata.page),
                limit: parseInt(action.payload.metadata.limit)
            }

            if (metadata.page === 1) {
                lista = action.payload.data
            } else {
                lista = state.data.concat(action.payload.data)
            }

            return {
                ...state,
                data: lista,
                metadata,
                loading: false
            }
        default:
            return state
    }
}