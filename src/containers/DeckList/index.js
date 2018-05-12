import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDecks } from '../../utilities/api';
import { receiveDecks } from './actions';
import DeckCard from '../../components/DeckItem/index';
import { deckListActions } from '../../utilities/routes';
import { MAIN_COLOR } from '../../utilities/colors';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }
  componentDidMount() {
    if (!this.props.decks) {
      getDecks()
        .then((decks) => {
          this.props.receiveDecks(decks);
        })
        .then(() => {
          this.setState(() => ({ ready: true }));
        });
    } else {
    // eslint-disable-next-line react/no-did-mount-set-state
      this.setState(() => ({ ready: true }));
    }
  }

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
        'DeckView',
        { deckId: item.id, deckTitle: item.deckTitle, force: false }
      )}
    >
      <DeckCard title={item.deckTitle} date={item.date} cardCount={item.cards.length} id={item.id} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.ready
          ? <FlatList
            data={this.props.decks}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
          : <ActivityIndicator />
        }
        <FloatingAction
          actions={deckListActions}
          color={MAIN_COLOR}
          onPressItem={
            () => {
              this.props.navigation.navigate('NewDeck');
            }
          }
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.AppState.decks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: (payload) => dispatch(receiveDecks(payload)),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

DeckList.propTypes = {
  receiveDecks: PropTypes.func.isRequired,
  decks: PropTypes.array,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
