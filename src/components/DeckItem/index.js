import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import CardCount from '../CardCount/index';
import { MAIN_COLOR } from '../../utilities/colors';

const DeckItem = (props) => (
  <Card titleStyle={styles.title} title={props.title} key={props.id}>
    <View style={styles.deckItemView}>
      <Text style={{ flex: 1 }}>{moment(props.date).format('dddd, MMMM D, \'YY, h:mm a')}</Text>
      <CardCount cardCount={props.cardCount} />
    </View>
  </Card>
);
export default DeckItem;

DeckItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  cardCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    color: MAIN_COLOR,
    fontSize: 20,
  },
  deckItemView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
