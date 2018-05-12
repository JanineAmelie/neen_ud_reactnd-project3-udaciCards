/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import CardFlip from 'react-native-card-flip';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-native-elements';
import { LIGHT_COLOR, LIGHT_GREY } from '../../utilities/colors';
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
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.navigation.setParams({ tabBarVisible: false });
  }
  componentWillUnmount() {
  }

  nextItemHandler() {
    // check if current index + 1 wont exceed numberOfItems
    if ((this.state.currentIndex + 1) === this.props.cards.length) {
      this.setState({ finished: true });
      //  @todo: dispatch action
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
    // if yes this.setState({finished: true})
    // if no this.setState({ currentIndex +=1 })
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

  render() {
    // if Quiz is Finished
    if (this.state.finished) {
      return (
        <View style={styles.container}>
          <Text> Quiz Finished</Text>
          <Text> Your Score: </Text>
          <Text> {this.state.score} / {this.props.cards.length} </Text>
        </View>
      );
    }
    // Show Quiz View
    const item = this.props.cards[this.state.currentIndex];
    return (
      <View style={styles.container}>
        <Text> {this.state.currentIndex + 1} / {this.props.cards.length}</Text>
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
  };
}

function mapDispatchToProps() {
  return {
    //  SetDateOfQuizzing
  };
}

QuizView.propTypes = {
  cards: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  deckTitle: PropTypes.string.isRequired,
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
  textItemStyle: {
    textAlign: 'center',
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    padding: 0,
  },
  card1: {
  },
  card2: {
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
