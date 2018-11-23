import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './AddEntry';
import History from './History';
import { purple, gray } from '../utils/colors';

const TabNavigator = createBottomTabNavigator({
  History: History,
  AddEntry: AddEntry,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'History') {
        iconName = 'ios-bookmarks';
      } else if (routeName === 'AddEntry') {
        iconName = 'ios-add-circle';
      }

      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: purple,
    inactiveTintColor: gray,
  },
});

export default createAppContainer(TabNavigator);
