import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

const DeckCard = (props) => (
  <Card titleStyle={styles.title} title={props.title} key={props.id}>
    <View>
      <Text>date: {moment(props.date).format('dddd, MMMM D, \'YY | h:mm a' )}</Text>
      <View style={styles.cardContainer}>
        <MaterialCommunityIcons
          name="cards-outline"
          size={36}
          style={{ color: '#0067B3' }}
        />
        <View style={styles.cardCount}>
          <Text style={styles.countText} >{props.cardCount}</Text>
        </View>
      </View>
    </View>
  </Card>
);
export default DeckCard;

DeckCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  cardCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    color: '#0067B3',
    fontSize: 20,
  },
  cardContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  countText: {
    color: '#0067B3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardCount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
