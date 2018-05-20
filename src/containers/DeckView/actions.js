import { RECEIVE_DECK, RESET_DECK } from './constants';


export const receiveDeck = (payload) => ({
  type: RECEIVE_DECK,
  payload,
});

export const resetDeck = () => ({
  type: RESET_DECK,
});
