
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import CardItem from './CardItem';

class BusHeader extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.fontStyle}>{this.props.title}</Text>
        <Icon name="chevron-down" size={35} color="rgb(138,138,143)" />
      </View>
    );
  }
}

const styles = {
  fontStyle: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 16
  },
  viewStyle: {
    width: '100%',
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginRight: 10
  }
};

export default BusHeader;
