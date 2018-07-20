import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';
import { foodPull } from '../actions';

class FoodScreen extends Component {

    componentWillMount() {
      this.props.foodPull('https://rumobile.rutgers.edu/1/rutgers-dining.txt');
    }

    openStatus(name) {
      var open = false;
      if(name == 'brower') {
        console.log(this.props.brower.meals);
        for (var i = 0; i < this.props.brower.meals.length; i++) {
          if(this.props.brower.meals[i].meal_avail == true) {
            open = true;
          }
        }
        if (open == true) {
          return <Image source={require('../images/food/openStatusIcon.png')} style={styles.cardStatus} />;
        } else {
          return <Image source={require('../images/food/closedStatusIcon.png')} style={styles.cardStatus} />;
        }
      }

      if(name == 'busch') {
        console.log(this.props.busch.meals);
        for (var i = 0; i < this.props.busch.meals.length; i++) {
          if(this.props.busch.meals[i].meal_avail == true) {
            open = true;
          }
        }
        if (open == true) {
          return <Image source={require('../images/food/openStatusIcon.png')} style={styles.cardStatus} />;
        } else {
          return <Image source={require('../images/food/closedStatusIcon.png')} style={styles.cardStatus} />;
        }
      }

      if(name == 'livingston') {
        console.log(this.props.livingston.meals);
        for (var i = 0; i < this.props.livingston.meals.length; i++) {
          if(this.props.livingston.meals[i].meal_avail == true) {
            open = true;
          }
        }
        if (open == true) {
          return <Image source={require('../images/food/openStatusIcon.png')} style={styles.cardStatus} />;
        } else {
          return <Image source={require('../images/food/closedStatusIcon.png')} style={styles.cardStatus} />;
        }
      }

      if(name == 'neilson') {
        console.log(this.props.neilson.meals);
        for (var i = 0; i < this.props.neilson.meals.length; i++) {
          if(this.props.neilson.meals[i].meal_avail == true) {
            open = true;
          }
        }
        if (open == true) {
          return <Image source={require('../images/food/openStatusIcon.png')} style={styles.cardStatus} />;
        } else {
          return <Image source={require('../images/food/closedStatusIcon.png')} style={styles.cardStatus} />;
        }
      }

    }

    foodList(d) {
      Actions.food_list({ data: d });
    }

    renderFood() {
      if(this.props.trying_food_pull == 'pulled') {
        return (
          <View style={styles.cardGrid}>
            <View style={styles.cardRow}>
              <TouchableOpacity onPress={() => this.foodList(this.props.brower)}>
                <ImageBackground source={require('../images/food/browerImg.png')} style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Brower</Text>
                  {this.openStatus('brower')}
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.foodList(this.props.busch)}>
                <ImageBackground source={require('../images/food/buschImg.png')} style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Busch</Text>
                  {this.openStatus('busch')}
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.cardRow}>
              <TouchableOpacity onPress={() => this.foodList(this.props.livingston)}>
                <ImageBackground source={require('../images/food/livingstonImg.png')} style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Livingston</Text>
                  {this.openStatus('livingston')}
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.foodList(this.props.neilson)}>
                <ImageBackground source={require('../images/food/neilsonImg.png')} style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Neilson</Text>
                  {this.openStatus('neilson')}
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else {
        return (
          <Text>Pulling, Please Wait . . .</Text>
        );
      }
    }

    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Food'}
          />
          <View style={styles.bodyGrid}>
            <Text style={styles.baseText}>PLACES TO EAT</Text>
            <Text style={styles.titleText}>Dining Halls</Text>
            <Text style={styles.subText}>Food is essential to life!</Text>
            {this.renderFood()}
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
    titleBar: {
      marginLeft: 15,
      marginRight: 15,
      height: 2,
      backgroundColor: 'rgb(231, 231, 231)',
    },
    baseText: {
      fontSize: 11,
      fontWeight: '600',
      color: 'rgb(236, 70, 70)'
    },
    bodyGrid: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 11,

    },
    titleText: {
      fontSize: 22,
    },
    subText: {
      fontSize: 22,
      color: 'rgb(138, 138, 143)',
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

const mapStateToProps = state => {
  return {
      trying_food_pull: state.food.trying_food_pull,
      brower: state.food.brower,
      busch: state.food.busch,
      livingston: state.food.livingston,
      neilson: state.food.neilson,
  };
};

export default connect(mapStateToProps, { foodPull })(FoodScreen);
