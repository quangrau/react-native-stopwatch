import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerWrapper from './TimerWrapper';
import ButtonWrapper from './ButtonWrapper';
import LapsWrapper from './LapsWrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
});

class App extends Component {

  constructor() {
    super();

    this.state = {
      isRunning: false,
      timeElapsed: null,
      startTime: null,
      laps: [],
    };
  }

  handleStartPress = () => {

    if (this.state.isRunning) {
      this.setState({
        laps: [],
        isRunning: false,
        timeElapsed: null,
      });

      clearInterval(this.interval);
    } else {
      this.setState({
        isRunning: true,
        startTime: new Date(),
      });

      this.interval = setInterval(() => {
        this.setState({
          timeElapsed: new Date() - this.state.startTime,
        });
      }, 30);
    }
  }

  handleLapPress = () => {
    const { timeElapsed, isRunning } = this.state;

    if (!isRunning) return false;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([timeElapsed]),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TimerWrapper
            timeElapsed={this.state.timeElapsed}
          />

          <ButtonWrapper
            isRunning={this.state.isRunning}
            onStartPress={this.handleStartPress}
            onLapPress={this.handleLapPress}
          />
        </View>

        <View style={styles.footer}>
          <LapsWrapper
            laps={this.state.laps}
          />
        </View>
      </View>
    );
  }
}

export default App;
