import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Header from '../Components/Header';

export default class FoodScreen extends Component {

  onHomePress() {
    Actions.home_screen();
  }

  onBusPress() {
    Actions.stop_screen();
  }

  onFoodPress() {
    Actions.food_screen();
  }

  onMorePress() {
    Actions.more_screen();
  }

    render() {
      return (
        <View style={styles.home}>
        <View>
          <Header
            text={'Links'}
          />
        </View>
        <View style={styles.navbar}>
          <TouchableWithoutFeedback onPress={this.onHomePress.bind(this)}>
          <View style={styles.navbarItemStyle}>
          <Image
            style={{ width: 25, height: 22, marginBottom: 2}}
            source={require('../images/TodayUnselected.jpg')}
          />
          <Text style={styles.navbarFontStyle}>Today</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.onBusPress.bind(this)}>
          <View style={styles.navbarItemStyle}>
          <Image
            style={{ width: 22, height: 22, marginBottom: 2}}
            source={require('../images/BusUnselected.jpg')}
          />
          <Text style={styles.navbarFontStyle}>Bus</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.onFoodPress.bind(this)}>
          <View style={styles.navbarItemStyle}>
          <Image
            style={{ width: 22, height: 22, marginBottom: 2}}
            source={require('../images/FoodUnselected.jpg')}
          />
          <Text style={styles.navbarFontStyle}>Food</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
          <View style={styles.navbarItemStyle}>
          <Image
            style={{ width: 22, height: 22, marginBottom: 2}}
            source={require('../images/LinksSelected.png')}
          />
          <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>Links</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.onMorePress.bind(this)}>
          <View style={styles.navbarItemStyle}>
          <Image
            style={{ width: 22, height: 6, marginBottom: 7, marginTop: 8}}
            source={require('../images/MoreUnselected.jpg')}
          />
          <Text style={styles.navbarFontStyle}>More</Text>
          </View>
          </TouchableWithoutFeedback>
        </View>
        </View>
      );
    }

}

const styles = {
    home: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    navbar: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(229, 229, 234)',
      borderWidth: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'absolute',
      flexDirection: 'row',
      bottom: 0
    },
    navbarFontStyle: {
      fontSize: 10,
      fontWeight: 'bold',
      color: 'rgb(142, 142, 147)',
      fontFamily: 'system font',
      bottom: -3
    },
    navbarItemStyle: {
      alignItems: 'center'
    }
};
