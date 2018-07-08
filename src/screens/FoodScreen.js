import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';

export default class FoodScreen extends Component {
    state = { food: [] }

    componentWillMount() {
      axios.get('https://rumobile.rutgers.edu/1/rutgers-dining.txt')
      .then(response => {
            console.log(response);
            this.setState({ food: response.data });
            console.log(this.state);
        })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    }

    openStatus(location_name) {
      for (i in this.state.food) {
        if (this.state.food[i].location_name == location_name ) {
          closed_count = 0
          for (j in this.state.food[i].meals) {
            if (!this.state.food[i].meals[j].meal_avail) {
              closed_count += 1;
            }
          }
          if (closed_count == this.state.food[i].meals.length) {
            return <Image source={require('../images/food/closedStatusIcon.png')} style={styles.cardStatus} />;
          } else {
            return <Image source={require('../images/food/openStatusIcon.png')} style={styles.cardStatus} />;
          }
        }
      }
    }

    foodList(location_name) {
      for (i in this.state.food) {
        if (this.state.food[i].location_name == location_name ) {
          meal = this.state.food[i];
          console.log(meal);
        }
      }
    }


    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Food'}
          />
          <View style={styles.titleBar} />
          <View style={styles.bodyGrid}>
            <Text style={styles.baseText} >PLACES TO EAT</Text>
            <Text style={styles.titleText} >Dining Halls</Text>
            <Text style={styles.subText} >Food is essential to life!</Text>
            <View style={styles.cardGrid}>
              <View style={styles.cardRow}>
                <TouchableOpacity onPress={() => this.foodList('Brower Commons')}>
                  <ImageBackground source={require('../images/food/browerImg.png')} style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Brower</Text>
                    {this.openStatus('Brower Commons')}
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.foodList('Busch Dining Hall')}>
                  <ImageBackground source={require('../images/food/buschImg.png')} style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Busch</Text>
                    {this.openStatus('Busch Dining Hall')}
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.cardRow}>
                <TouchableOpacity onPress={() => this.foodList('Livingston Dining Commons')}>
                  <ImageBackground source={require('../images/food/livingstonImg.png')} style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Livingston</Text>
                    {this.openStatus('Livingston Dining Commons')}
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.foodList('Neilson Dining Hall')}>
                  <ImageBackground source={require('../images/food/neilsonImg.png')} style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Neilson</Text>
                    {this.openStatus('Neilson Dining Hall')}
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <BottomBar hs={true} bus={true} fs={false} ls={true} mr={true}/>
        </View>
      );
    }

}

const styles = {
    home: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    bodyGrid: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 11,

    },
    baseText: {
      fontSize: 11,
      fontWeight: '600',
      color: 'rgb(236, 70, 70)'
    },
    titleText: {
      fontSize: 22,
    },
    subText: {
      fontSize: 22,
      color: 'rgb(138, 138, 143)',
    },
    titleBar: {
      marginLeft: 15,
      marginRight: 15,
      height: 2,
      backgroundColor: 'rgb(231, 231, 231)',
    },
    cardGrid: {
      height: 355,

    },
    cardRow: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 10,
      justifyContent: 'center',
    },
    cardBody: {
      height: 167,
      width: 167,
      marginLeft: 5,
      marginRight: 5,
    },
    cardTitle: {
      fontSize: 22,
      textAlign: 'left',
      paddingLeft: 12,
      paddingTop: 10,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'white'
    },
    cardStatus: {
      marginRight: 8,
      alignSelf: 'flex-end',
      marginTop: 98,
    }
};
