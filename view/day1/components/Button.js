import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles';

const Button = ({ onPress, name, text }) => (
  <View style={{ flex: 1, alignItems: name === 'btnStart' ? 'flex-end' : 'flex-start' }}>
    <TouchableHighlight
      style={styles[name]}
      underlayColor="#eee"
      onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;
