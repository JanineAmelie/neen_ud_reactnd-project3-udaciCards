// AsyncStorage Database helper methods
import { AsyncStorage } from 'react-native';
import shortid from 'shortid';
import { DECKS_STORAGE_KEY, setDummyDataIfNull } from './_decks';


// Returns all decks
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyDataIfNull);
}

// getDeck
//  id

export function saveDeckTitle(newDeckTitle) {
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


function deckToUpdate(decks, deckId) {
  return decks.findIndex((deck) => deck.id === deckId);
}

// addCardToDeck
export function addCardToDeck(newCard, deckId) {
  let d = [];
  // get async storage
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      // stringify data in variable
      d = decks ? JSON.parse(decks) : [];
      // find the index of the deckToUpdate
      const indexOfDeckToUpdate = deckToUpdate(d, deckId);
      // add the newCard to the decksArray at the correct deck
      d[indexOfDeckToUpdate].cards.push(newCard);
    })
    .then(() => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(d));
    })
    // return newCard
    .then(() => newCard);
}
// title
// card
