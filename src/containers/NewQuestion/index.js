import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Divider } from 'react-native-elements';
import { addNewCard } from './actions';
import { DARK_GREY, MAIN_COLOR } from '../../utilities/colors';

class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params;
    return {
      title: `Creating card for: ${deckTitle}`,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      questionText: '',
      answerText: '',
      disabled: true,
    };
  }
  handleQuestionChange(questionText) {
    this.setState({ questionText });
    this.checkIfValid();
  }

  handleAnswerChange(answerText) {
    this.setState({ answerText });
    this.checkIfValid();
  }

  handleSubmit() {
    const newCard = {
      question: this.state.questionText,
      answer: this.state.answerText,
    };
    this.props.addNewCard(newCard, this.props.deckId);
    this.props.navigation.navigate(
      'DeckList',
      { force: true }
    );
  }

  checkIfValid() {
    if (this.state.questionText.length > 0 && this.state.answerText.length > 0) {
      this.setState({ disabled: false });
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.mainHeader} > Question</Text>
        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={(questionText) => this.handleQuestionChange(questionText)}
          value={this.state.questionText}
          underlineColorAndroid="transparent"
        />

        <Text style={styles.mainHeader}> Answer</Text>
        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={(answerText) => this.handleAnswerChange(answerText)}
          value={this.state.answerText}
          underlineColorAndroid="transparent"
        />
        <Divider style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'transparent' }} />
        <Button
          raised
          onPress={() => this.handleSubmit()}
          disabled={this.state.disabled}
          buttonStyle={styles.enabledStyle}
          disabledStyle={styles.disabledStyle}
          icon={{ name: 'add', type: 'MaterialIcons' }}
          title="Submit Card"
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  return {
    deckTitle: navigation.state.params.deckTitle,
    deckId: navigation.state.params.deckId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewCard: (newCard, deckId) => dispatch(addNewCard(newCard, deckId)),
  };
}

NewQuestion.propTypes = {
  navigation: PropTypes.object.isRequired,
  deckTitle: PropTypes.string.isRequired,
  deckId: PropTypes.string.isRequired,
  addNewCard: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  mainHeader: {
    color: MAIN_COLOR,
    paddingBottom: 10,
    paddingTop: 10,
  },
  enabledStyle: {
    backgroundColor: MAIN_COLOR,
  },
  disabledStyle: {
    backgroundColor: '#9E9E9E',
  },
  input: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    backgroundColor: DARK_GREY,
    width: '90%',
    alignSelf: 'center',
  },
});
