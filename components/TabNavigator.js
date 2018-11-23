import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './AddEntry';
import History from './History';
import EntryDetail from './EntryDetail';
import { purple, gray, white } from '../utils/colors';

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

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: purple,
      },
      headerTintColor: white
    })
  }
});

export default createAppContainer(MainNavigator);
