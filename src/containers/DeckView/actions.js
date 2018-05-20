import { RECEIVE_DECK, RECEIVE_DECK_FINISHED, RESET_DECK } from './constants';


export const receiveDeck = (payload) => {
  console.log('ACTION payload', payload);
  return ({
    type: RECEIVE_DECK,
    payload,
  });
};

export const resetDeck = () => ({
  type: RESET_DECK,
});
