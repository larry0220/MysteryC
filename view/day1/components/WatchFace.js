import React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../styles';

const WatchFace = ({ sectionTime, totalTime }) => (
  <View style={styles.watchFaceContainer}>
    <Text style={styles.sectionTime}>{sectionTime}</Text>
    <Text style={styles.totalTime}>{totalTime}</Text>
  </View>
)


WatchFace.propTypes = {
  sectionTime: React.PropTypes.string.isRequired,
  totalTime: React.PropTypes.string.isRequired,
};

export default WatchFace;
