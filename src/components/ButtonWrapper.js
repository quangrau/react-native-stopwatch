import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    borderColor: '#00CC00',
  },
  stopButton: {
    borderColor: '#C00C00',
  },
  lapButton: {
    borderColor: '#33A9E0',
  }
});

class ButtonWrapper extends Component {

  render() {
    const { isRunning } = this.props;

    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={[
            styles.button, 
            isRunning ? styles.stopButton : styles.startButton
          ]}
          underlayColor="rgba(0, 204, 0, .5)"
          onPress={this.props.onStartPress}
        >
          <Text>
            {isRunning ? 'STOP' : 'START'}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.lapButton]}
          underlayColor="rgba(51, 169, 224, .5)"
          onPress={this.props.onLapPress}
        >
          <Text>LAP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

ButtonWrapper.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  onStartPress: PropTypes.func.isRequired,
  onLapPress: PropTypes.func.isRequired,
};

export default ButtonWrapper;
