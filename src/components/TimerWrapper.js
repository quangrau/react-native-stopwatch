import formatTime from 'minutes-seconds-milliseconds';
import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
  },
});

class TimerWrapper extends Component {

  render() {
    return (
      <View style={styles.timerWrapper}>
        <Text style={styles.timer}>
          {formatTime(this.props.timeElapsed)}
        </Text>
      </View>
    );
  }
}

TimerWrapper.propTypes = {
  timeElapsed: PropTypes.number,
};

TimerWrapper.defaultProps = {
  timeElapsed: 0,
};

export default TimerWrapper;
