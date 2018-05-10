// import * as API from '../../utilities/api';
import { RECEIVE_DECKS } from './contants';

export const receiveDecks = (payload) => ({
  type: RECEIVE_DECKS,
  payload,
});
