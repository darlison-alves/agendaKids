import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListEvents from '../pages/ListEvents';
import Details from '../pages/Details';
import Login from '../pages/Login';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: ListEvents,
    Details: Details,
    Login: Login
  },
  {...config, initialRouteName: 'Login'}
);
HomeStack.path = '';


const tabNavigator = createAppContainer(HomeStack);

tabNavigator.path = '';

export default tabNavigator;
