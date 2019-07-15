import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import events from './Events'
import user from './User'

const reducers = combineReducers({
    events,
    user
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store