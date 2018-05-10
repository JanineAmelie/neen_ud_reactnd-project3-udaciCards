import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { CustomStatusBar } from '../../utilities/routes';


class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    ready: false,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar backgroundColor="#E91E63" barStyle="light-content" />
        <View><Text>Testing</Text></View>
      </View>
    );
  }
}

// (state, props)
function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
