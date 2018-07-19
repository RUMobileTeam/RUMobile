
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeBanner = (props) => (
  <View style={styles.view}>
    <Text style={styles.text}>{props.message}</Text>
    <Image style={{ height: 27, width: 42 }} source={require('../images/bannerBear.png')} />
  </View>
);

const styles = {
  view: {
    height: 26.9,
    backgroundColor: '#ed4545',
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    marginLeft: 10,
    color: 'white'
  }
};

export default HomeBanner;
