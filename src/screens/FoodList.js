import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import BackHeader from '../Components/BackHeader';
import BottomBar from '../Components/BottomBar';
import { foodTab } from '../actions';
import FoodSection from '../Components/FoodSection';

class FoodList extends Component {

  componentWillMount() {
    this.props.foodTab(0);
  }

  backToFood() {
    Actions.pop();
  }

  /*<View style={styles.section}>
    <View style={styles.sectionImgBox}>
      <ImageBackground source={require('../images/food/SaladBar.jpg')} style={styles.sectionImage}>
        <Text style={styles.sectionTitle}>Salad Bar</Text>
      </ImageBackground>
    </View>
    <View style={styles.sectionTextBox}>
      <Text style={styles.sectionText}>Tomato Wedges</Text>
    </View>
    <View style={styles.sectionTextBox}>
      <Text style={styles.sectionText}>Tossed Salad</Text>
    </View>
    <View style={styles.sectionTextBox}>
      <Text style={styles.sectionText}>Broccoli Buds Op</Text>
    </View>
  </View>*/

  /*<View style={styles.statusBar}>
    <TouchableOpacity onPress={this.backToFood.bind(this)}>
      <Text style={styles.statusBarButton}>Food</Text>
    </TouchableOpacity>
  </View>*/

  handleIndexChange = (index) => {
    this.props.foodTab(index)
  }

  renderFoodLists() {
    if(this.props.data.meals[this.props.tab_index].meal_avail == true ) {
      console.log(this.props.data.meals[this.props.tab_index].genres);
      return this.props.data.meals[this.props.tab_index].genres.map(genre =>
        <FoodSection key={genre.genre_name} food={genre} />
      );
    } else {
      console.log('Dont Render Food');
      return (
        <Image
          style={{ width: 385, height: 485 }}
          source={require('../images/food/blankstate_nofood.png')}
        />
      );
    }
  }

    render() {
      console.log(this.props.data);
      return (
        <View style={styles.home}>

        <BackHeader
          text={'Food'}
        />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>{this.props.data.location_name}</Text>
            <SegmentedControlTab
              values={['BREAKFAST', 'LUNCH', 'DINNER', 'TAKEOUT']}
              selectedIndex={this.props.tab_index}
              onTabPress={this.handleIndexChange}
              activeTabStyle={styles.activeTabStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
          </View>
          <ScrollView>
          <View>
            {this.renderFoodLists()}
          </View>
          </ScrollView>
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
    statusBar: {
      flexDirection: 'row',
    },
    statusBarButton: {
      fontSize: 25,
      fontWeight: '500',
      paddingTop: 30,
      paddingLeft: 30,
    },
    titleBar: {
      paddingLeft: 13,
      paddingRight: 13,
      paddingTop: 11,
      paddingBottom: 10,
    },
    titleText: {
      fontSize: 25,
      color: 'rgb(0, 0, 0)',
      fontWeight: '600',
      paddingBottom: 10,
    },
    activeTabStyle: {
        backgroundColor: '#ed4545'
    },
    tabStyle: {
        borderColor: '#ed4545',
        height: 30,
        paddingBottom: 10,
    },
    tabTextStyle: {
      color: '#ed4545'
    },
    section: {
      flex: 1,
    },
    sectionImgBox: {
      height: 80,
      flexDirection: 'row',
    },
    sectionImage: {
      flex: 1,
      justifyContent: 'center',
    },
    sectionTextBox: {
      borderColor: 'rgb(237, 237, 237)',
      borderBottomWidth: 1,
    },
    sectionTitle: {
      textAlign: 'center',
      color: 'white',
      fontSize: 34,
      fontWeight: '300',
    },
    sectionText: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      fontSize: 18,
    },
};

const mapStateToProps = state => {
  return {
      tab_index: state.food.tab_index
  };
};

export default connect(mapStateToProps, { foodTab })(FoodList);
