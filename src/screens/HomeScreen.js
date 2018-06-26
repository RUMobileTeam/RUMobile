import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../Components/Header';
import { testAction } from '../actions';

class HomeScreen extends Component {

  onTest() {
    this.props.testAction();
  }

  onBusPress() {
    Actions.stop_screen();
  }

  onFoodPress() {
    Actions.food_screen();
  }

  onLinksPress() {
    Actions.links_screen();
  }

  onMorePress() {
    Actions.more_screen();
  }

  getDateText(today) {
    const weekdays = new Array(7);
    weekdays[0] = 'SUNDAY';
    weekdays[1] = 'MONDAY';
    weekdays[2] = 'TUESDAY';
    weekdays[3] = 'WEDNESDAY';
    weekdays[4] = 'THURSDAY';
    weekdays[5] = 'FRIDAY';
    weekdays[6] = 'SATURDAY';

    const months = new Array(12);
    months[0] = 'JANUARY';
    months[1] = 'FEBRUARY';
    months[2] = 'MARCH';
    months[3] = 'APRIL';
    months[4] = 'MAY';
    months[5] = 'JUNE';
    months[6] = 'JULY';
    months[7] = 'AUGUST';
    months[8] = 'SEPTEMBER';
    months[9] = 'OCTOBER';
    months[10] = 'NOVEMBER';
    months[11] = 'DECEMBER';

    const day = weekdays[today.getDay()];
    const mon = months[today.getMonth()];
    const dayOfMonth = today.getDate().toString();

    return `${day}, ${mon} ${dayOfMonth}`;
  }
    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Today'}
            dateText={this.getDateText(new Date())}
          />
          <TouchableOpacity onPress={this.onTest.bind(this)}>
          <Text>{this.props.test}</Text>
          </TouchableOpacity>

          <View style={styles.navbar}>

            <View>
            <TouchableWithoutFeedback>
            <View style={styles.navbarItemStyle}>
            <Image
              style={{ width: 25, height: 22, marginBottom: 2}}
              source={require('../images/TodaySelected.jpg')}
            />
            <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>Today</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>

            <View>
            <TouchableWithoutFeedback onPress={this.onBusPress.bind(this)}>
            <View style={styles.navbarItemStyle}>
            <Image
              style={{ width: 22, height: 22, marginBottom: 2}}
              source={require('../images/BusUnselected.jpg')}
            />
            <Text style={styles.navbarFontStyle}>Bus</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>

            <View>
            <TouchableWithoutFeedback onPress={this.onFoodPress.bind(this)}>
            <View style={styles.navbarItemStyle}>
            <Image
              style={{ width: 22, height: 22, marginBottom: 2}}
              source={require('../images/FoodUnselected.jpg')}
            />
            <Text style={styles.navbarFontStyle}>Food</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>

            <View>
            <TouchableWithoutFeedback onPress={this.onLinksPress.bind(this)}>
            <View style={styles.navbarItemStyle}>
            <Image
              style={{ width: 22, height: 22, marginBottom: 2}}
              source={require('../images/LinksUnselected.jpg')}
            />
            <Text style={styles.navbarFontStyle}>Links</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>

            <View>
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
      alignItems: 'center',
    }
};

const mapStateToProps = state => {
  return {
      test: state.test.testString
  };
};

export default connect(mapStateToProps, { testAction })(HomeScreen);
