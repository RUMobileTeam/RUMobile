import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import BottomBar from '../Components/BottomBar';
import Header from '../Components/Header';
import BusHeader from '../Components/BusHeader';
import ActiveList from '../Components/ActiveList';
import InactiveList from '../Components/InactiveList';

export default class StopScreen extends Component {

  onChange() {
    Actions.stop_screen();
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
                        selectedIndex={1}
                        onTabPress={this.onChange.bind(this)}
                        activeTabStyle={styles.activeTabStyle}
                        tabStyle={styles.tabStyle}
                        tabTextStyle={styles.tabTextStyle}
            />
          </View>
          <ScrollView>
          <BusHeader title={"Active Routes"} />
          <View style={{height: 10}}/>
          <ActiveList />
          <BusHeader title={"Inactive Routes"} />
          <View style={{height: 10}}/>
          <InactiveList />
          </ScrollView>
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
