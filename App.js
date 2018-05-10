/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import App from './src/containers/App';
const store = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
export default class UdaciCards extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
