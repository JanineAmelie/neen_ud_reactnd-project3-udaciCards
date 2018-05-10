/* eslint-disable no-mixed-operators,no-underscore-dangle */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root_reducer';

export default function configureStore() {
  const middleware = [
    thunk,
  ];

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
}

//  Source: https://github.com/zalmoxisus/redux-devtools-extension
