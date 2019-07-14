import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ListEvents from '../pages/ListEvents';
import { Platform } from 'react-native';
import tabNavigator from './MainTabNavigator';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const MainNavigator = createStackNavigator({
    Home: ListEvents     
},{
    headerMode: 'none'
});

const App = createAppContainer(createSwitchNavigator({
    Main: tabNavigator
}));

export default App;
