export const GET_LOGIN = 'GET_LOGIN'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_ERROR = ''

const INITIAL_STATE = {
    token: '',
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case GET_LOGIN:
            return {
                ...state,
                token: action.payload,
                error: '',
                loading: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}