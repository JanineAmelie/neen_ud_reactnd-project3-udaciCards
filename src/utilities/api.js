// AsyncStorage Database helper methods
import { AsyncStorage } from 'react-native';
import shortid from 'shortid';
import { DECKS_STORAGE_KEY, setDummyDataIfNull } from './_decks';


// Returns all decks
export function getDecks() {
  console.log('fetchingDecks...');
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyDataIfNull);
}
// getDecks => Returns all decks,

// getDeck
//  id

// saveDeckTitle

export function saveDeckTitle(newDeckTitle) {
  console.log('addingNewDeck...');
  // get asyncStorageItems,
  const newDeck = {
    deckTitle: newDeckTitle,
    id: shortid.generate(),
    date: Date.now(),
    cards: [],
  };
  let d = [];
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      d = decks ? JSON.parse(decks) : [];
      d.push(newDeck);
    })
    .then(() => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(d));
    })
    .then(() => newDeck);
}


// title


// addCardToDeck
// title
// card
