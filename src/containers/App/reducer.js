/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */

import produce from 'immer';
import { RECEIVE_DECKS } from '../DeckList/contants';
import { RECEIVE_NEW_DECK } from '../NewDeck/constants';
import { RECEIVE_NEW_CARD } from '../NewQuestion/constants';
import { RECEIVE_NEW_DATE } from '../QuizView/constants';

const initialState = {
  decks: null,
  dateQuizzed: null,
};

function deckToUpdate(decks, deckId) {
  return decks.findIndex((deck) => deck.id === deckId);
}

const AppState = produce((draft, action) => {
  if (!draft) {
    return initialState;
  }
  let indexOfDeckToUpdate = 0;
  if (draft.decks) {
    indexOfDeckToUpdate = deckToUpdate(draft.decks, action.deckToUpdate);
  }
  switch (action.type) {
    case RECEIVE_DECKS:
      draft.decks = action.payload;
      break;
    case RECEIVE_NEW_DECK:
      draft.decks.push(action.payload);
      break;
    case RECEIVE_NEW_CARD:
      draft.decks[indexOfDeckToUpdate].cards.push(action.payload);
      break;
    case RECEIVE_NEW_DATE:
      draft.dateQuizzed = action.payload;
      break;
    default:
      return draft;
  }
});

export default AppState;
