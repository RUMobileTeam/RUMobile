//Import a Library
import React from 'react';
import { Text, View } from 'react-native';
import CardItem from './CardItem';
// Create Component
class Header extends React.Component {
  /*renderProfilePic() {
    if (this.props.showProfilePic) {
      return (
        <Image
          source={require('../images/userProfilePic@3x.jpg')}
        />
      );
    }
    return;
  }
  <View>
    {this.renderProfilePic()}
  </View>*/
  render() {
    return (

        <View style={styles.viewStyle}>
          <CardItem>
            <View>
              <Text style={styles.textStyle2}>{this.props.dateText}</Text>
              <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
          </CardItem>
        </View>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    //alignItems: 'center',
    height: 115,
    paddingTop: 30,
    paddingLeft: 20,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 34,
    paddingTop: 4,
    fontWeight: '800',
    paddingRight: 200,

  },
  textStyle2: {
    fontSize: 12,
    color: 'rgb(142, 142, 147)',
    fontFamily: 'system font',
    fontWeight: 'bold',
  },
  imageStyle: {

  }
};

// Make It Available to App
export default Header;
