/* eslint-disable no-return-assign,jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { DARK_COLOR, LIGHT_COLOR, MAIN_COLOR, TEXT_COLOR } from '../../utilities/colors';
import { updateDateQuizzed } from './actions';

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Quizzing: ${navigation.state.params.deck.deckTitle}`,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      score: 0,
      finished: false,
      front: true,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ tabBarVisible: false });
  }
  componentWillUnmount() {
  }

  nextItemHandler() {
    // check if current index + 1 wont exceed numberOfItems
    this.setState({ front: true });
    if ((this.state.currentIndex + 1) === this.props.cards.length) {
      this.setState({ finished: true });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
    // if yes this.setState({finished: true})
    // if no this.setState({ currentIndex +=1 })
  }
  handleBackToDeck() {
    const backAction = NavigationActions.back();
    this.props.navigation.dispatch(backAction);
  }
  updateScore(answerType) {
    if (answerType === '+') {
      this.setState({ score: this.state.score + 1 });
      this.nextItemHandler();
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.state.score === 0) {
        this.nextItemHandler();
      } else {
        this.setState({ score: this.state.score - 1 });
        this.nextItemHandler();
      }
    }
  }
  restartQuizHandler() {
    this.setState({
      currentIndex: 0,
      score: 0,
      finished: false,
      front: true,
    });
  }
  handleShowButton() {
    if (this.state.front) {
      this.setState({ front: false });
    } else {
      this.setState({ front: true });
    }
  }
  render() {
    // if Quiz is Finished
    if (this.state.finished) {
      this.props.updateDateQuizzed();
      return (
        <View style={styles.container}>
          <Text style={styles.emoji}> 🎆 </Text>
          <Text style={styles.finished}> Quiz Finished!</Text>
          <Text style={styles.scoreNumber}> {this.state.score} / {this.props.cards.length} </Text>
          <View style={styles.btnContainer}>
            <Button
              title="Back"
              large
              backgroundColor={LIGHT_COLOR}
              icon={{ name: 'arrow-back', type: 'Ionicons' }}
              onPress={() => this.handleBackToDeck()}
            />
            <Button
              title="Restart"
              large
              backgroundColor={MAIN_COLOR}
              icon={{ name: 'refresh', type: 'MaterialCommunityIcons' }}
              onPress={() => this.restartQuizHandler()}
            />
          </View>
        </View>
      );
    }
    // Show Quiz View
    const item = this.props.cards[this.state.currentIndex];
    return (
      <View style={styles.container}>
        <Text> {this.state.currentIndex + 1} / {this.props.cards.length} </Text>
        <Text> Left: {this.props.cards.length - (this.state.currentIndex + 1) }</Text>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.cardTouch}
            onPress={() => this.setState({ front: !this.state.front })}
          >
            {this.state.front
              ? (
                <View style={styles.cardContainer}>
                  <View style={styles.face}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <FontAwesome name="question" size={32} color={TEXT_COLOR} />
                    </View>
                    <Text style={styles.label}>{item.question} </Text>
                  </View>
                </View>
              )
              : (
                <View style={styles.cardContainer}>
                  <View style={styles.back}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <FontAwesome name="graduation-cap" size={32} color={TEXT_COLOR} />
                    </View>
                    <Text style={styles.labelAnswer}>{item.answer} </Text>
                  </View>
                </View>
              )
            }
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <Button
            large
            backgroundColor="#4CAF50"
            icon={{ name: 'check', type: 'font-awesome' }}
            onPress={() => this.updateScore('+')}
          />
          <Button
            large
            backgroundColor="#f44336"
            icon={{ name: 'remove', type: 'font-awesome' }}
            onPress={() => this.updateScore('-')}
          />
          <TouchableOpacity>
          <Button
            large
            title={this.state.front ? 'Show Answer' : 'Show Question'}
            backgroundColor={this.state.front ? '#2196F3' : '#3F51B5'}
            onPress={() => this.handleShowButton()}
          />
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params;
  return {
    deckTitle: deck.deckTitle,
    cards: deck.cards,
    navigation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDateQuizzed: () => dispatch(updateDateQuizzed()),
  };
}

QuizView.propTypes = {
  cards: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  updateDateQuizzed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  face: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_COLOR,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  back: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  label: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'System',
    color: TEXT_COLOR,
    backgroundColor: 'transparent',
  },
  labelAnswer: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: TEXT_COLOR,
    backgroundColor: 'transparent',
  },
  finished: {
    textAlign: 'center',
    fontSize: 30,
  },
  scoreNumber: {
    color: MAIN_COLOR,
    fontWeight: 'bold',
    fontSize: 35,
  },
  emoji: {
    textAlign: 'center',
    fontSize: 60,
  },
});
