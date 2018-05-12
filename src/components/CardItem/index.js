import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { LIGHT_COLOR, MAIN_COLOR } from '../../utilities/colors';

const CardItem = (props) => (
  <View style={styles.item}>
    <View style={styles.questionTitleView}>
      <Text style={styles.questionTitle}>{props.question}</Text>
    </View>
    <View style={styles.answerView}>
      <Entypo name="quote" size={32} color={LIGHT_COLOR} />
      <Text style={{ textAlign: 'left', marginLeft: 4 }}>{props.answer}</Text>
    </View>
  </View>
);
export default CardItem;

CardItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    color: MAIN_COLOR,
    fontSize: 20,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 2,
    paddingBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  answerView: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  questionTitleView: {
    backgroundColor: LIGHT_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    height: 40,
  },
  questionTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
