import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import BottomBar from '../Components/BottomBar';
import Header from '../Components/Header';
import BusHeader from '../Components/BusHeader';

export default class StopScreen extends Component {

  constructor() {
    super();
    this.DummyData = {
      nearby: [
        {
          name: 'Henderson',
          value: '0.6'
        },
        {
          name: 'Gibbons',
          value: '0.7'
        }
      ]
    };
  }

  onChange() {
    Actions.route_screen();
  }

    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Bus'}
          />
          <View style={{ paddingLeft: 12, paddingRight: 12 }}>
          <SegmentedControlTab
                      values={['Stops', 'Routes']}
                      selectedIndex={0}
                      onTabPress={this.onChange.bind(this)}
                      activeTabStyle={styles.activeTabStyle}
                      tabStyle={styles.tabStyle}
                      tabTextStyle={styles.tabTextStyle}
          />
        </View>
        <BusHeader title={"Nearby"} />
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
    activeTabStyle: {
        backgroundColor: '#ed4545'
    },
    tabStyle: {
        borderColor: '#ed4545',
        height: 30
    },
    tabTextStyle: {
      color: '#ed4545'
    },
};
