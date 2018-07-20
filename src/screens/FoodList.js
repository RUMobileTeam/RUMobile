import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';

export default class FoodScreen extends Component {
    // state = { food: [] }

    constructor(){
      super()
      this.state = {
        selectedIndex: 0,
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }

    backToFood() {
      Actions.pop();
    }

    render() {
      return (
        <View style={styles.home}>
          <View style={styles.statusBar}>
            <TouchableOpacity onPress={this.backToFood.bind(this)}>
              <Text style={styles.statusBarButton}>Food</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Livingston Dining Commons</Text>
            <SegmentedControlTab
              values={['BREAKFAST', 'LUNCH', 'DINNER', 'TAKEOUT']}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.handleIndexChange}
              activeTabStyle={styles.activeTabStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.sectionImgBox}>
              <ImageBackground source={require('../images/food/SaladBar.jpg')} style={styles.sectionImage}>
                <Text style={styles.sectionTitle}>Salad Bar</Text>
              </ImageBackground>
            </View>
            <View style={styles.sectionTextBox}>
              <Text style={styles.sectionText}>Tomato Wedges</Text>
            </View>
            <View style={styles.sectionTextBox}>
              <Text style={styles.sectionText}>Tossed Salad</Text>
            </View>
            <View style={styles.sectionTextBox}>
              <Text style={styles.sectionText}>Broccoli Buds Op</Text>
            </View>
          </View>
          <BottomBar hs={true} bus={true} fs={false} ls={true} mr={true}/>
        </View>
      );
    }

}

const styles = {
    home: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    section: {
      flex: 1,
    },
    sectionImgBox: {
      height: 80,
      flexDirection: 'row',
    },
    sectionImage: {
      flex: 1,
      justifyContent: 'center',
    },
    sectionTextBox: {
      borderColor: 'rgb(237, 237, 237)',
      borderBottomWidth: 1,
    },
    sectionTitle: {
      textAlign: 'center',
      color: 'white',
      fontSize: 34,
      fontWeight: '300',
    },
    sectionText: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      fontSize: 18,
    },
    statusBar: {
      height: 67,
      borderBottomColor: 'rgb(193, 193, 193)',
      borderBottomWidth: 1,
      flexDirection: 'row',
    },
    statusBarButton: {
      fontSize: 25,
      fontWeight: '500',
      paddingTop: 30,
      paddingLeft: 30,
    },
    titleBar: {
      paddingLeft: 13,
      paddingRight: 13,
      paddingTop: 11,
      paddingBottom: 10,
    },
    titleText: {
      fontSize: 25,
      color: 'rgb(0, 0, 0)',
      fontWeight: '600',
      paddingBottom: 10,
    },
    activeTabStyle: {
        backgroundColor: '#ed4545'
    },
    tabStyle: {
        borderColor: '#ed4545',
        height: 30,
        paddingBottom: 10,
    },
    tabTextStyle: {
      color: '#ed4545'
    },
    blankImage: {
      height: 200,
      width: 200,
      marginTop: 90,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: 20,
    },
    blankTitle: {
      fontSize: 17,
      color: 'rgb(120, 120, 120)',
      fontWeight: '600',
      paddingBottom: 10,
      textAlign: 'center',
    },
    blankText: {
      fontSize: 16,
      color: 'rgb(120, 120, 120)',
      fontWeight: '300',
      paddingBottom: 10,
      textAlign: 'center',
    },
};
