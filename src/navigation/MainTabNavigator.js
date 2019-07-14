import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListEvents from '../pages/ListEvents';
import Details from '../pages/Details';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: ListEvents,
    Details: Details
  },
  {...config, initialRouteName: 'Details'}
);
HomeStack.path = '';


const tabNavigator = createAppContainer(HomeStack);

tabNavigator.path = '';

export default tabNavigator;
