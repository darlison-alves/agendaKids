export const GET_LOGIN = 'GET_LOGIN'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_ERROR = ''

const INITIAL_STATE = {
    token: '',
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                token: action.payload,
                error: ''
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}