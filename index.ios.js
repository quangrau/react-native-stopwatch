import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

class stopwatch extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('stopwatch', () => stopwatch);
