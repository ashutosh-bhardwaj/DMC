import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SellScreen from '../screens/SellScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-compass${focused ? '' : '-outline'}`
          : 'md-compass'
      }
    />
  ),
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });
const SellStack = createStackNavigator({
  Sell: SellScreen,
});

SellStack.navigationOptions = {
  tabBarLabel: 'Sell',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'logo-usd'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SellStack,
  SettingsStack,
}, {
  tabBarOptions: {
    activeTintColor: Colors.primary.light,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.fade,
    },
  }  
});
