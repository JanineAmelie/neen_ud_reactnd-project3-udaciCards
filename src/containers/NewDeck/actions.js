import * as API from '../../utilities/api';
import { RECEIVE_NEW_DECK } from './constants';

export const addNewDeck = (newDeckTitle) => (dispatch) => (
  API
    .saveDeckTitle(newDeckTitle)
    .then((newDeck) => dispatch(receiveNewDeck(newDeck)))
);

export const receiveNewDeck = (payload) => ({
  type: RECEIVE_NEW_DECK,
  payload,
});

