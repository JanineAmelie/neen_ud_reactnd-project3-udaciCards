import React from 'react';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from '../containers/DeckList';
import NewDeck from '../containers/NewDeck';
import DeckView from '../containers/DeckView';
import { LIGHT_COLOR, MAIN_COLOR, TEXT_COLOR, WHITE } from './colors';

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
  color: LIGHT_COLOR,
}];

export const deckViewActions = [{
  text: 'New Card',
  icon: <MaterialCommunityIcons name="credit-card-plus" size={16} style={{ color: '#fff' }} />,
  name: 'btn_newCard',
  position: 1,
  color: LIGHT_COLOR,
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
    activeTintColor: WHITE,
    style: {
      height: 56,
      backgroundColor: MAIN_COLOR,
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
      headerTintColor: TEXT_COLOR,
      headerStyle: {
        backgroundColor: MAIN_COLOR,
        height: 56,
      },
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: TEXT_COLOR,
      headerStyle: {
        backgroundColor: MAIN_COLOR,
        height: 56,
      },
    },
  },
});

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};
