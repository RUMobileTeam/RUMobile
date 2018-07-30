import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import BottomBar from '../Components/BottomBar';
import Header from '../Components/Header';
import BusHeader from '../Components/BusHeader';
import { getBusStops } from '../actions';
import NearbyList from '../Components/NearbyList';
import AllList from '../Components/AllList';

class StopScreen extends Component {

  componentWillMount() {
    if(this.props.check == 'here') {

    } else {
      this.props.getBusStops();
    }
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
        <ScrollView>
          <BusHeader title={"Nearby"} />
          <NearbyList />
          <BusHeader title={"All"} />
          <AllList />
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

const mapStateToProps = state => {
  return {
      nearby: state.bus.nb_data,
      all: state.bus.all_data,
      check: state.bus.data_here
  };
};


export default connect(mapStateToProps, { getBusStops })(StopScreen);
