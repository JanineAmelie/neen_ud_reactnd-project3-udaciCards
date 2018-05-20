import * as API from '../../utilities/api';
import { RECEIVE_NEW_DECK } from './constants';

export const addNewDeck = (newDeckTitle, id, ref) => (dispatch) => {
  return (
    API
      .saveDeckTitle(newDeckTitle, id)
      .then((newDeck) => dispatch(receiveNewDeck(newDeck)))
      .then(() => ref.replace('DeckView', { deckId: id, force: false, deckTitle: newDeckTitle }))
  );
};

export const receiveNewDeck = (payload) => ({
  type: RECEIVE_NEW_DECK,
  payload,
});

