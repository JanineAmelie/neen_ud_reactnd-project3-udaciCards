/* eslint-disable max-len */
// Fills the asyncStorage with DummyData

import { AsyncStorage } from 'react-native';
export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function setDummyData() {
  const dummyData = {
    decks: [
      {
        title: 'JavaScript Fundamentals',
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
        title: 'React Terms',
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
    ],
  };

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
}
