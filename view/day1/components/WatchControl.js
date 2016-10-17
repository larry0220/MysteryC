import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Button from './Button';
import styles from '../styles';


const WatchControl = ({ status, addRecord, clearRecord, startWatch, pauseWatch, canReset, canRecord }) => {

  function pressStart() {
    if (status !== 'active') {
      startWatch();
    } else {
      pauseWatch();
    }
  }

  function pressRecord() {
    if (status === 'active') {
      addRecord()
    } else {
      clearRecord()
    }
  }

  return (
    <View style={styles.watchControlContainer}>
      <Button
        onPress={() => pressRecord()}
        name="btnStop"
        text={canReset ? '復位' : '計次'} />

      <Button
        onPress={() => pressStart()}
        name="btnStart"
        text={canRecord ? '停止' : '啟動'} />
    </View>
  )
}

WatchControl.propTypes = {
  pauseWatch: React.PropTypes.func.isRequired,
  clearRecord: React.PropTypes.func.isRequired,
  startWatch: React.PropTypes.func.isRequired,
  addRecord: React.PropTypes.func.isRequired,
};


export default WatchControl;
