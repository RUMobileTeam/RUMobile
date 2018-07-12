import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';
import { testAction, testDataPull } from '../actions';

class HomeScreen extends Component {

  onTest() {
    this.props.testAction();
    this.props.testDataPull();
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

          <BottomBar hs={false} bus={true} fs={true} ls={true} mr={true}/>
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

const mapStateToProps = state => {
  return {
      test: state.test.testString
  };
};

export default connect(mapStateToProps, { testAction, testDataPull })(HomeScreen);
