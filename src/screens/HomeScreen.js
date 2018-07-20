import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';
import HomeBanner from '../Components/HomeBanner';
import { loginUser, pullBanner, timeAction, pullDate } from '../actions';

class HomeScreen extends Component {

  componentWillMount() {
    //Handles the Date Text at the top of the Header
    this.props.pullDate(new Date());

    //Logins In firebase Admin which has read-only access to the RTD
    //Add the username followed by the password as strings
    this.props.loginUser('.', '.');
  }

  componentDidMount() {

    //At Every Second, the method below Time() is run. Use this to monitor refreshes
    //this.timer = setInterval(()=> this.Time(), 1000);

    //This pulls the FireBase Header Data
    this.props.pullBanner();
  }

  Time() {
    var x = new Date();
    this.props.timeAction(x);
  }

    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Today'}
            dateText={this.props.dateText}
          />
          <HomeBanner message={this.props.banner}/>

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
      login: state.home.login,
      banner: state.home.banner,
      dateText: state.home.dateText
  };
};

export default connect(mapStateToProps, { loginUser, pullBanner, timeAction, pullDate })(HomeScreen);
