import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Headerbar from './components/Header/Header';
import ListEvents from './pages/ListEvents';

import store from './reducers/store'
import AppNavigator from './navigation/AppNavigator';


console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', 'Node'];

export default function App () {
    return(
        <Provider store={store}  >            
            <AppNavigator/>
        </Provider>
    )
}