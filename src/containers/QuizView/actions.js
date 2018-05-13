import * as API from '../../utilities/api';
import { RECEIVE_NEW_DATE } from './constants';

export const updateDateQuizzed = () => (dispatch) => (
  API
    .updateDateQuizzed()
    .then((date) => dispatch(receiveNewDateQuizzed(date)))
);

export const receiveNewDateQuizzed = (payload) => ({
  type: RECEIVE_NEW_DATE,
  payload,
}
);

