import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDecks } from '../../utilities/api';
import { receiveDecks } from './actions';
import DeckCard from '../../components/DeckCard/index';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }
  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.receiveDecks(decks);
      })
      .then(() => {
        this.setState(() => ({ ready: true }));
      });
  }
  renderItems() {
    return this.props.decks.map((item) => (
      <DeckCard key={item.id} title={item.deckTitle} date={item.date} cardCount={item.cards.length} id={item.id} />
    ));
  }
  render() {
    return (
      <View>
        { this.state.ready
          ? this.renderItems()
          : <ActivityIndicator />
        }
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

DeckList.propTypes = {
  receiveDecks: PropTypes.func.isRequired,
  decks: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
