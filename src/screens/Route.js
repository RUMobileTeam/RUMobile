import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import ClearHeader from '../Components/ClearHeader';
import BottomBar from '../Components/BottomBar';

export default class Route extends Component {

    render() {
      return (
        <View style={styles.home}>
        <ClearHeader
          text={'Bus'}
        />
          <BottomBar hs={true} bus={false} fs={true} ls={true} mr={true}/>
        </View>
      );
    }

}

const styles = {
    home: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
};
