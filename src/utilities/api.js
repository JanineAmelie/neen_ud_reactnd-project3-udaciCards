// AsyncStorage Database helper methods
import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY, setDummyDataIfNull, DATE_QUIZZED_KEY } from './_decks';


// Returns all decks
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyDataIfNull);
}

// getDeck
//  id
function deckToUpdate(decks, deckId) {
  return decks.findIndex((deck) => deck.id === deckId);
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((data) => {
      const res = JSON.parse(data);
      console.log('id:', id, res);
      const deckIndex = deckToUpdate(res, id);
      const deck = res[deckIndex];
      console.log('deckFound!', deck);
      return deck;
    });
}

export function saveDeckTitle(newDeckTitle, newId) {
  // get asyncStorageItems,
  const newDeck = {
    deckTitle: newDeckTitle,
    id: newId,
    date: Date.now(),
    cards: [],
  };
  console.log('newDeck:', newDeck);
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

export function updateDateQuizzed() {
  const date = Date.now();
  return AsyncStorage.setItem(DATE_QUIZZED_KEY, JSON.stringify(date))
    .then(() => date);
}

export function getDateQuizzed() {
  return AsyncStorage.getItem(DATE_QUIZZED_KEY)
    .then((data) => data);
}
