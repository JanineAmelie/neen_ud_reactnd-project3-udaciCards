import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deckViewActions } from '../../utilities/routes';
import CardItem from '../../components/CardItem/index';
import CardCount from '../../components/CardCount/index';
import { LIGHT_COLOR, MAIN_COLOR } from '../../utilities/colors';


class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params;
    return {
      title: deckTitle,
    };
  };
  componentDidMount() {
    if (this.props.force) {
      this.forceUpdate();
    }
  }
  handleQuizStart() {
    this.props.navigation.navigate(
      'QuizView',
      { deck: this.props.deck }
    );
  }
  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <CardItem question={item.question} answer={item.answer} />
  );

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <CardCount cardCount={this.props.cards.length} />
          { deck.cards.length === 0
            ? <Text> Add Some cards to start a quiz! </Text>
            : <Button
              disabled={false}
              disabledStyle={styles.disabledStyle}
              buttonStyle={styles.enabledStyle}
              title="Start Quiz"
              onPress={() => this.handleQuizStart()}
              icon={{ name: 'pencil-square', type: 'font-awesome' }}
            />
          }
        </View>

        <Divider style={styles.dividerStyle} />

        <FlatList
          data={this.props.cards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <FloatingAction
          color={MAIN_COLOR}
          actions={deckViewActions}
          onPressItem={
            () => {
              this.props.navigation.navigate('NewQuestion', { deckTitle: deck.deckTitle, deckId: deck.id });
            }
          }
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId, force } = navigation.state.params;

  const deck = state.AppState.decks.find((deck) => deck.id === deckId);
  return {
    deck,
    cards: deck.cards,
    force,
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  topView: {
    paddingLeft: 10,
    paddingRight: 0,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dividerStyle: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 1,
    backgroundColor: LIGHT_COLOR,
  },
  enabledStyle: {
    backgroundColor: MAIN_COLOR,
    paddingRight: 50,
    paddingLeft: 50,
  },
  disabledStyle: {
    backgroundColor: 'transparent',
  },
});

DeckView.propTypes = {
  force: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  deck: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DeckView);
