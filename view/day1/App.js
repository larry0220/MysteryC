import React from 'react';
import {
  View
} from 'react-native';

import styles from './styles';
import WatchFace from './components/WatchFace';
import WatchControl from './components/WatchControl';
import WatchRecord from './components/WatchRecord';
import Timer from './widgets/timer';

const timer = new Timer();
let recordCounter = 0;
const setInitialState = () => (
  {
    status: 'stop',
    canRecord: false,
    canReset: false,
    record:[
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""}
    ],
    totalTime: "00:00.00",
    sectionTime: "00:00.00",
  }
)


class App extends React.Component {
  constructor() {
    super();
    this.startWatch = this.startWatch.bind(this);
    this.pauseWatch = this.pauseWatch.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
    this.addRecord = this.addRecord.bind(this);

    this.state = setInitialState();
  }

  componentWillUnmount() {
    timer.reset();
    recordCounter = 0;
  }

  startWatch() {
    this.setState({
      status: 'active',
      canRecord: true,
      canReset: false
    });

    timer.start(() => {
      this.setState({
        totalTime: timer.formatTotal(),
        sectionTime: timer.formatSection()
      });
    });
  }

  pauseWatch() {
    this.setState({
      status: 'pause',
      canRecord: false,
      canReset: true
    });
    timer.pause()
  }

  resetWatch() {
    timer.reset();
    recordCounter = 0;

    this.setState(setInitialState())
  }

  addRecord() {
    recordCounter++;
    let record = this.state.record.slice();

    if (recordCounter < 8) {
      record.pop();
    }

    record.unshift({
      title: "計次" + recordCounter,
      time: timer.getSection()
    });

    this.setState({ record });
  }

  render(){
    return(
      <View style={styles.watchContainer}>
        <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}></WatchFace>
        <WatchControl
          status={this.state.status}
          addRecord={this.addRecord}
          clearRecord={this.resetWatch}
          startWatch={this.startWatch}
          pauseWatch={this.pauseWatch}
          canReset={this.state.canReset}
          canRecord={this.state.canRecord} />
        <WatchRecord record={this.state.record}></WatchRecord>
      </View>
    )
  }
}




export default App;
