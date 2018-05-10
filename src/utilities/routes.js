import React from 'react';
import { Constants } from 'expo';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
// import { TabNavigator, StackNavigator } from 'react-navigation';

export function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
