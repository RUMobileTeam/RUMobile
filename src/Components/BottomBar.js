import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';

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

    render() {
      return (
        <View style={styles.navbar}>
          <TouchableOpacity onPress={this.onHomePress.bind(this)}>
          <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onBusPress.bind(this)}>
          <Text>Bus</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onFoodPress.bind(this)}>
          <Text>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onLinksPress.bind(this)}>
          <Text>Links</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onMorePress.bind(this)}>
          <Text>More</Text>
          </TouchableOpacity>
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
      backgroundColor: '#FF9800',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'absolute',
      flexDirection: 'row',
      bottom: 0
    }
};
