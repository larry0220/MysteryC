import React from 'react';
import {
  Text,
  View
} from 'react-native';

import MainView from './MainView';
import Day1 from './day1/App';

const days = {}
for (let i = 1; i < 30; i++) {
  days['Day' + (i + 1)] =  () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Hello</Text>
    </View>
  )
}


const routes = {
  MainView,
  Day1,
  ...days
}

export default routes;
