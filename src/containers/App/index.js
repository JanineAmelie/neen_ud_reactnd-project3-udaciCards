import React from 'react';
import { View } from 'react-native';
import { CustomStatusBar, MainNavigator } from '../../utilities/routes';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar tintColor="#fff" backgroundColor="#0061B6" barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

export default App;
