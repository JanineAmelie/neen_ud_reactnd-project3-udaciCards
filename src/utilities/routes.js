import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Constants } from 'expo';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from '../containers/DeckList';
import NewDeck from '../containers/NewDeck';

export function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export const deckListActions = [{
  text: 'New Deck',
  icon: <Entypo name="add-to-list" size={16} style={{ color: '#fff' }} />,
  name: 'btn_newDeck',
  position: 1,
}];

export const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: '#005CB8',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
});

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#005CB8',
        height: 56,
      },
    },
  },
});

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};
