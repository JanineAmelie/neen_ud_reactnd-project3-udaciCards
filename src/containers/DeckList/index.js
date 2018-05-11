import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDecks } from '../../utilities/api';
import { receiveDecks } from './actions';
import DeckCard from '../../components/DeckCard/index';
import { deckListActions } from '../../utilities/routes';

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
      this.setState(() => ({ ready: true }));
    }
  }
  renderItem = ({ item }) => (
    <TouchableOpacity key={item.id}>
      <DeckCard key={item.id} title={item.deckTitle} date={item.date} cardCount={item.cards.length} id={item.id} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.ready
          ? <FlatList
            data={this.props.decks}
            renderItem={this.renderItem}
          />
          : <ActivityIndicator />
        }
        <FloatingAction
          actions={deckListActions}
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
