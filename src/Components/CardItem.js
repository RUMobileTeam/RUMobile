import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  const { children } = props;
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardItem;
