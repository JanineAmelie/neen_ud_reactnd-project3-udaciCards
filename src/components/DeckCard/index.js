import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, StyleSheet, Text } from 'react-native';

const DeckCard = (props) => (
  <View style={styles.item} key={props.id}>
    <View>
      <Text style={{ fontSize: 20 }}> {props.title} </Text>
      <Text>Date Created: {moment.unix(props.date).format('dddd, MMMM D YYYY')}</Text>
      <Text>Cards in Deck: {props.cardCount}</Text>
    </View>
  </View>
);
export default DeckCard;

DeckCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  cardCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
});
