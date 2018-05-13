import React, { Component } from 'react';
import shortid from 'shortid';
import { KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native-elements';
import { addNewDeck } from './actions';
import { MAIN_COLOR } from '../../utilities/colors';

class NewDeck extends Component {
  static navigationOptions = () => (
    {
      title: 'Create a New Deck',
    }
  );
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  componentDidMount() {
    console.log('halloo', this.props.navigation);
  }
  handleChange(text) {
    this.setState({ text });
  }

  handleSubmit() {
    const id = shortid.generate();
    this.props.addNewDeck(this.state.text, id);
    this.props.navigation.replace('DeckView', { deckId: id, force: false, deckTitle: this.state.text });
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.mainHeader} h4> Deck Title</Text>
        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
        />
        <Button
          raised
          onPress={() => this.handleSubmit()}
          disabled={!this.state.text}
          buttonStyle={styles.enabledStyle}
          disabledStyle={styles.disabledStyle}
          icon={{ name: 'playlist-add-check', type: 'MaterialIcons' }}
          title="Submit Deck"
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { key } = navigation.state;
  return {
    currentKey: key,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewDeck: (deckTitle, id) => dispatch(addNewDeck(deckTitle, id)),
  };
}

NewDeck.propTypes = {
  addNewDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  currentKey: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainHeader: {
    color: MAIN_COLOR,
    marginBottom: 20,
  },
  enabledStyle: {
    backgroundColor: MAIN_COLOR,
  },
  disabledStyle: {
    backgroundColor: '#9E9E9E',
  },
  input: {
    height: 70,
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: '#EEE',
    width: '90%',
    alignSelf: 'center',
  },
});
