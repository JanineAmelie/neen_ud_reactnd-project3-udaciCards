/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */

import produce from 'immer';
import { RECEIVE_DECKS } from '../DeckList/contants';
const initialState = {
  decks: null,
};

const AppState = produce((draft, action) => {
  if (!draft) {
    return initialState;
  }
  switch (action.type) {
    case RECEIVE_DECKS:
      draft.decks = action.payload;
      break;
    default:
      return draft;
  }
});

export default AppState;
