/* eslint-disable max-len */
// Fills the asyncStorage with DummyData

import { AsyncStorage } from 'react-native';
export const DECKS_STORAGE_KEY = 'UdaciCards:decks';
export const DATE_QUIZZED_KEY = 'UdaciCards:dateQuizzed';

export function setDummyData() {
  const dummyData = [
    {
      deckTitle: 'JavaScript',
      id: '23TplPdS',
      date: 1526068800000,
      cards: [
        {
          question: 'What is a variable?',
          answer: 'You can think of variables as "holding places" where values are stored and retrieved.',
        },
        {
          question: 'What is a Function?',
          answer: 'A JavaScript function is a "recipe" of instructions to accomplish a well-defined task.',
        },
      ],
    },
    {
      deckTitle: 'React',
      id: '46Juzcyx',
      date: 1520139600000,
      cards: [
        {
          question: 'What is a SPA?',
          answer: 'A single-page application is an application that loads a single HTML page and all the necessary assets required to run',
        },
        {
          question: 'What is JSX?',
          answer: 'JSX is a syntax extension to JavaScript. It is similar to a template language,',
        },
      ],
    },
  ];
  const dateQuizzed = null;
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  AsyncStorage.setItem(DATE_QUIZZED_KEY, JSON.stringify(dateQuizzed));
  return dummyData;
}

export function setDummyDataIfNull(data) {
  return data === null
    ? setDummyData()
    : JSON.parse(data);
}
