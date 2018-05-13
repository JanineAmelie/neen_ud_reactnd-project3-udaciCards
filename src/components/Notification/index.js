import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DARK_COLOR, TEXT_COLOR } from '../../utilities/colors';

const Notification = (props) => (
  <Card
    containerStyle={styles.wrapperStyle}
  >
    <Text style={styles.title}> {props.title}</Text>
  </Card>
);
export default Notification;

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapperStyle: {
    backgroundColor: DARK_COLOR,
  },
});
