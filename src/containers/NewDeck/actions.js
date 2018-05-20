import * as API from '../../utilities/api';
import { RECEIVE_NEW_DECK } from './constants';

export const addNewDeck = (newDeckTitle, id, cb) => (dispatch) => {
  return (
    API
      .saveDeckTitle(newDeckTitle, id)
      .then((newDeck) => dispatch(receiveNewDeck(newDeck)))
      .then(cb)
  );
};

export const receiveNewDeck = (payload) => ({
  type: RECEIVE_NEW_DECK,
  payload,
});

