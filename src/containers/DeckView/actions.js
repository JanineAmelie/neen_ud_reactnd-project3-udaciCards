import { RECEIVE_DECK, RECEIVE_DECK_FINISHED, RESET_DECK } from './constants';


// export const receiveDeck = (payload) => ({
//   type: RECEIVE_DECK,
//   payload,
// });

export const resetDeck = () => ({
  type: RESET_DECK,
});

export function receiveDeck(payload) {
  return function (dispatch) {
    dispatch({
      type: RECEIVE_DECK,
      payload,
    });
    dispatch({
      type: RECEIVE_DECK_FINISHED,
      payload: false,
    });
  };
}
