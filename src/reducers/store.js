import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import events from './Events'

const reducers = combineReducers({
    events
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store