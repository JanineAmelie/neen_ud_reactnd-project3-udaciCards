/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import moment from 'moment';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDateQuizzed, getDecks } from '../../utilities/api';
import { receiveDecks } from './actions';
import DeckCard from '../../components/DeckItem/index';
import { deckListActions } from '../../utilities/routes';
import { MAIN_COLOR } from '../../utilities/colors';
import Notification from '../../components/Notification/index';
import { receiveNewDateQuizzed } from '../QuizView/actions';

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
        getDateQuizzed()
          .then((date) => {
            if (date !== 'null') {
              this.props.receiveNewDateQuizzed(parseInt(date, 10));
            }
          })
          .then(() => {
            this.setState(() => ({ ready: true }));
          });
      });
  }

  checkIfQuizzedToday() {
    if (!this.props.dateQuizzed) {
      return false;
    }
    const dateQuizzed = moment(this.props.dateQuizzed);
    return moment().isSame(dateQuizzed, 'day');
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
        {!this.checkIfQuizzedToday() && this.state.ready &&
          <Notification title="👋 Looks like you haven't quizzed today, take one!" />
        }
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
    dateQuizzed: state.AppState.dateQuizzed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: (payload) => dispatch(receiveDecks(payload)),
    receiveNewDateQuizzed: (payload) => dispatch(receiveNewDateQuizzed(payload)),
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
  receiveNewDateQuizzed: PropTypes.func.isRequired,
  decks: PropTypes.array,
  navigation: PropTypes.object,
  dateQuizzed: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
