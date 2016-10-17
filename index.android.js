import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator
} from 'react-native';

import routes from './view/routes';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1) {
    return false;
  }

  _navigator.pop();
  return true;
});

class MysteryC extends Component {
  renderScene(route, navigator) {
    _navigator = navigator;

    let RouteComponent = routes[route.name];

    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MainView' }}
        renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('MysteryC', () => MysteryC);
