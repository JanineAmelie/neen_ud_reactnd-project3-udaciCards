import * as API from '../../utilities/api';
import { RECEIVE_NEW_CARD } from './constants';

export const addNewCard = (newDeckTitle) => (dispatch) => (
  API
    .addCardToDeck(newDeckTitle)
    .then((newCard) => dispatch(receiveNewCard(newCard)))
);

export const receiveNewCard = (payload, deckToUpdate) => ({
  type: RECEIVE_NEW_CARD,
  payload,
  deckToUpdate,
});

