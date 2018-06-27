import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

export default class BottomBar extends Component {

  onHomePress() {
    Actions.home_screen();
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

  hsButton() {
    if(this.props.hs == true) {
      return (
      <View>
      <TouchableWithoutFeedback onPress={this.onHomePress.bind(this)}>
      <View style={styles.navbarItemStyle}>
      <Image
        style={{ width: 25, height: 22, marginBottom: 2}}
        source={require('../images/TodayUnselected.jpg')}
      />
      <Text style={styles.navbarFontStyle}>Today</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
      );
    }
    return (
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
    )
  }

  busButton() {
    if(this.props.bus == true) {
      return (
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
      );
    }

    return (
      <View>
      <TouchableWithoutFeedback>
      <View style={styles.navbarItemStyle}>
      <Image
        style={{ width: 22, height: 22, marginBottom: 2}}
        source={require('../images/BusSelected.jpg')}
      />
      <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>Bus</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }

  fsButton() {
    if(this.props.fs == true) {
      return (
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
      );
    }
    return(
      <View>
      <TouchableWithoutFeedback>
      <View style={styles.navbarItemStyle}>
      <Image
        style={{ width: 22, height: 22, marginBottom: 2}}
        source={require('../images/FoodSelected.jpg')}
      />
      <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>Food</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }

  lsButton() {
    if(this.props.ls == true) {
      return (
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
      );
    }
    return (
      <View>
      <TouchableWithoutFeedback>
      <View style={styles.navbarItemStyle}>
      <Image
        style={{ width: 22, height: 22, marginBottom: 2}}
        source={require('../images/LinksSelected.png')}
      />
      <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>Links</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }

  mrButton() {
    if(this.props.mr == true) {
      return (
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
    );
    }
    return (
      <View>
      <TouchableWithoutFeedback>
      <View style={styles.navbarItemStyle}>
      <Image
        style={{ width: 22, height: 6, marginBottom: 7, marginTop: 8}}
        source={require('../images/MoreSelected.png')}
      />
      <Text style={{...styles.navbarFontStyle, color: '#ed4545'}}>More</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }

    render() {
      return (
        <View style={styles.navbar}>
          {this.hsButton()}
          {this.busButton()}
          {this.fsButton()}
          {this.lsButton()}
          {this.mrButton()}
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
      justifyContent: 'space-around',
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
