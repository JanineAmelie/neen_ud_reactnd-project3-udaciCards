import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Divider, Button} from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deckViewActions } from '../../utilities/routes';
import CardItem from '../../components/CardItem/index';
import CardCount from '../../components/CardCount/index';
import { DARK_GREY, MAIN_COLOR } from '../../utilities/colors';


class DeckView extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params;
    return {
      title: deckTitle,
    };
  };
  componentDidMount() {
  }

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <CardItem question={item.question} answer={item.answer} />
  );

  render() {
    return (
      <View style={styles.container}>
        <CardCount cardCount={this.props.cards.length} />
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
              this.props.navigation.navigate('NewCard');
            }
          }
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  console.log('DeckView mapstateToProps ID:', deckId);

  const deck = state.AppState.decks.find((deck) => deck.id === deckId);
  return {
    deck: deck,
    cards: deck.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  dividerStyle: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 4,
    backgroundColor: DARK_GREY,
  },
});

DeckView.propTypes = {
  navigation: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
