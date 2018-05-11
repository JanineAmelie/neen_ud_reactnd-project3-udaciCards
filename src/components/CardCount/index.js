import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { MAIN_COLOR } from '../../utilities/colors';

const CardCount = ({ cardCount }) => (
  <View style={styles.cardContainer}>
    <MaterialCommunityIcons
      name="cards-outline"
      size={36}
      style={{ color: MAIN_COLOR }}
    />
    <View style={styles.cardCount}>
      <Text style={styles.countText} >{cardCount}</Text>
    </View>
  </View>
);
export default CardCount;

CardCount.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    height: 36,
    flexDirection: 'row',

  },
  countText: {
    color: MAIN_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardCount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
