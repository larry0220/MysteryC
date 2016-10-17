import React,{ Component } from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';

import styles from '../styles';


const WatchRecord = ({ record }) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  theDataSource = ds.cloneWithRows(record);

  return (
    <ListView
      style={styles.recordList}
      dataSource={theDataSource}
      renderRow={(rowData) =>
        <View style={styles.recordItem}>
          <Text style={styles.recordItemTitle}>{rowData.title}</Text>
          <View style={{alignItems: "center"}}>
            <Text style={styles.recordItemTime}>{rowData.time}</Text>
          </View>
        </View>}/>
  );
}

WatchRecord.propTypes = {
  record: React.PropTypes.array.isRequired,
};

export default WatchRecord;
