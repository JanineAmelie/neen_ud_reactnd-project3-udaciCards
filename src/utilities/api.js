// AsyncStorage Database helper methods
import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './_decks';

// Returns all decks
export function getDecks() {
  console.log('fetchingDecks');
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      console.log('decks fetched:', results);
      return JSON.parse(results);
    });
}
// getDecks => Returns all decks,

// getDeck
//  id

// saveDeckTitle
// title


// addCardToDeck
// title
// card
