## Udacity React Nanodegree Project 3
UdaciCards: A mobile application that allows users to study collections of flashcards.

### Table of Contents
1. [Project Overview](#project-overview)
2. [Final Product](#final-product)
3. [Project Information](#project-information)
4. [How to Run](#how-to-run)
5. [ToDos](#todo)

---

### Project-Overview

The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This dynamic application was bootstrapped using `create-react-native-app` and `expo`.
Both state management features of Redux with the declarative component model from React were used.
React Native's [`asyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage.html) served to emulate a "backend" to maintain data between reloads on the device.
The Project utilizes the `Redux-thunk` middleware to handle async operations from the `asyncStorage`

---
### Final-Product
![Image](https://www.dropbox.com/s/4iqj83ztixajy5n/udaciCards.gif?raw=1)

---

### Platforms
Tested on
 - [ Android Studio ] Pixel 2 API 23
 - [ XCODE Simulator ] Iphone X
 - [ Physical ] Samsung Galaxy s7, 7.0 Nougat


### Project-Information
**Libraries:**
 - [ **React**](https://reactjs.org/)
 - [**React PropTypes**](https://github.com/facebook/prop-types)
 - [ **React Router-DOM**](https://reacttraining.com/react-router/)
 - [**Redux**](https://redux.js.org/)
 - [**Redux-Thunks**](https://github.com/gaearon/redux-thunk) Redux that allows you to write action creators that return a function instead of an action.
 - [**React Native Elements**](https://react-native-training.github.io/react-native-elements/) Cross Platform React Native UI Toolkit
 - [ **Moment**](https://momentjs.com/)  Time plugin to convert  the post and comment timestamps into relative time.
 - [**Immer**](https://github.com/mweststrate/immer) A library that makes working with immutable state easy and clean. You modify a copy of the state and return that.

**Development Tools I use:**
  -	[Eslint](https://eslint.org/) Linting plugin
  -	[airBNB eslint Plugin](https://github.com/airbnb/javascript) to maintain clean code.
  -	[Webstorm IDE](https://www.jetbrains.com/webstorm/)
	
**Project Specifications:**
- ✓ Use create-react-native-app to build your project.
- ✓ Allow users to create a deck which can hold an unlimited number of cards.
- ✓ Allow users to add a card to a specific deck.
- ✓ The front of the card should display the question.
- ✓ The back of the card should display the answer.
- ✓ Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- ✓ Users should receive a notification to remind themselves to study if they haven't already for that day.

**Project  Sources/References:**
  - [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html)
  - [Immutability the easy way](https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)
  - [React Native Router](https://facebook.github.io/react-native/docs/navigation.html)
  - [Expo Vector Icons](https://expo.github.io/vector-icons/)
  - [React Navigation: Stacks, Tabs, and Drawers … Oh my!](https://medium.com/async-la/react-navigation-stacks-tabs-and-drawers-oh-my-92edd606e4db)

---

### How-to-Run:

#### **Project pre-requisites**
 - Node & NPM
 - Terminal window where NPM commands work.
 - Winrar / Winzip etc.
 - A.) running the app on a simulator -> https://facebook.github.io/react-native/docs/getting-started.html follow this guide to make sure your environment is setup
 - B.) running the app on a device using Expo -> https://expo.io/tools#client

___
 
### **How to RUN**
____
    
#### Viewing locally
1. Clone, Fork or Download the ZIP file of this project into a folder on your local machine.
2. Extract the archive.
3. navigate to your project's folder
    ```bash
      $> cd /path/to/your-project-folder
    ```
4. In the root of the app, download all the project's dependencies
    ```bash
      $> npm install
    ```
5. Then run the project with the following command:
    ```bash
      $> npm start
    ```
6. run the project
  Simulator: 
    ```
     // for android
      $> a
     // or for ios
      $> i
    ```
#### Viewing using EXPO
https://expo.io/@janine.lourens/UdaciCards

____

### todo
features I want to add in the future
- ☐  Better responsiveness (especially on small devices)
- ☐  actual card flipping animation
- ☐  deleting cards / Decks
- ☐  editing cards / Decks
- ☐  user uploaded questions
- ☐  deck categories
- ☐  date  quizzed of each deck
- ☐  persistent score by item

