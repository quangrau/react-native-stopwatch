import formatTime from 'minutes-seconds-milliseconds';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#EEEEEE',
    borderTopWidth: 1,
    padding: 10,
  },
  label: {
    paddingRight: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
  },
});

class LapsWrapper extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.laps),
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.laps.length !== this.props.laps.length;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.laps),
    });
  }

  render() {
    if (this.props.laps.length === 0) return null;

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowID) => (
          <View style={styles.row}>
            <Text style={styles.label}>
              {`Lap ${parseInt(rowID, 0) + 1}.`}
            </Text>
            <Text style={styles.text}>
              {formatTime(rowData)}
            </Text>
          </View>
        )}
      />
    );
  }
}

LapsWrapper.propTypes = {
  laps: PropTypes.array.isRequired,
};

export default LapsWrapper;

