
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
import CardItem from './CardItem';

class ClearHeader extends React.Component {

  backUp() {
    Actions.pop();
  }

  render() {
    return (
          <TouchableOpacity onPress={() =>  this.backUp()}>
            <View style={styles.viewStyle}>
              <Icon name="chevron-left" size={30} color='white' />
              <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
          </TouchableOpacity>
    );
  }
}
const styles = {
  textStyle: {
    fontSize: 17,
    fontWeight: '500',
    paddingRight: 200,
    fontFamily: 'system font',
    color: 'white'

  },
  viewStyle: {
    flexDirection: 'row',
    paddingTop: 32,
    alignItems: 'center'
  }
};

export default ClearHeader;
