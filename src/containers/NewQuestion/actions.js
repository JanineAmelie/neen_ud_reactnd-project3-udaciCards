import * as API from '../../utilities/api';
import { RECEIVE_NEW_CARD } from './constants';

export const addNewCard = (newCard, deckId) => (dispatch) => (
  API
    .addCardToDeck(newCard, deckId)
    .then((newCard) => dispatch(receiveNewCard(newCard, deckId)))
);

export const receiveNewCard = (payload, deckToUpdate) => ({
  type: RECEIVE_NEW_CARD,
  payload,
  deckToUpdate,
});

