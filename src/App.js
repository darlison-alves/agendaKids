import React from 'react'
import { View, StatusBar } from 'react-native'

import CardEvent from "./components/cards/card-event";
import Headerbar from './components/Header/Header';

export default function App () {
    return(
        <View>
            <StatusBar barStyle="dark-content" hidden={false} />
            <Headerbar />            
            
        </View>
    )
}