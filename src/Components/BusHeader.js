
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import CardItem from './CardItem';
import { buttonRotate, nbDataPull } from '../actions';

class BusHeader extends Component {

  onPress() {
    if(this.props.collapse == true) {
      this.props.buttonRotate(false);
    } else {
      this.props.buttonRotate(true);
    }
  }

  rotateIcon() {

    if(this.props.collapse == true) {
      return (
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Icon name="chevron-left" size={35} color="rgb(138,138,143)" />
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <Icon name="chevron-down" size={35} color="rgb(138,138,143)" />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.fontStyle}>{this.props.title}</Text>
        {this.rotateIcon()}
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

const mapStateToProps = state => {
  const { collapse } = state.bus;

  return { collapse };
};

export default connect(mapStateToProps, { buttonRotate, nbDataPull })(BusHeader);
