import React from 'react';
import { View } from 'react-native';
import { CustomStatusBar, MainNavigator } from '../../utilities/routes';
import { DARK_COLOR } from '../../utilities/colors';
import { setLocalNotification } from '../../utilities/helpers';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar tintColor="#fff" backgroundColor={DARK_COLOR} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

export default App;
